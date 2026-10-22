'use strict';

// Stage one is browser-only: no network requests, storage or request references.
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const quoteForm = document.querySelector('#quote-form');
const serviceSelect = document.querySelector('#service');
const previewButton = document.querySelector('#preview-button');
const previewResult = document.querySelector('#preview-result');
const preferredDate = document.querySelector('#preferred-date');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  primaryNav.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  primaryNav.classList.toggle('is-open', open);
});

primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const mobileLayout = window.matchMedia('(max-width: 680px)');
mobileLayout.addEventListener('change', closeMenu);

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    serviceSelect.value = link.dataset.service;
    previewResult.hidden = true;
  });
});

function setMinimumDate() {
  // Local calendar date avoids UTC shifting the date around midnight.
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  preferredDate.min = `${year}-${month}-${day}`;
}
setMinimumDate();
preferredDate.addEventListener('focus', setMinimumDate);

function previewDetails() {
  setMinimumDate();
  if (!quoteForm.reportValidity()) return;
  const date = new Date(`${preferredDate.value}T12:00:00`);
  const readableDate = new Intl.DateTimeFormat('en-ZA', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(date);
  const heading = document.createElement('strong');
  heading.textContent = 'Your practice details';
  const details = document.createElement('p');
  details.textContent = `${serviceSelect.selectedOptions[0].text} · ${document.querySelector('#size').value} m² · Preferred date: ${readableDate}.`;
  const contact = document.createElement('p');
  contact.textContent = `${document.querySelector('#full-name').value.trim()} · ${document.querySelector('#email').value.trim()}`;
  const status = document.createElement('p');
  status.textContent = 'Preview only. Nothing was sent or saved. No price, booking or request reference has been created.';
  // textContent keeps typed content as text, never executable HTML.
  previewResult.replaceChildren(heading, details, contact, status);
  previewResult.hidden = false;
}

quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  previewDetails();
});
previewButton.addEventListener('click', previewDetails);
quoteForm.addEventListener('input', () => { previewResult.hidden = true; });
previewButton.disabled = false;

// Avoid restoring practice contact details when returning via browser history.
window.addEventListener('pageshow', event => {
  if (event.persisted) {
    quoteForm.reset();
    previewResult.replaceChildren();
    previewResult.hidden = true;
    closeMenu();
  }
});
