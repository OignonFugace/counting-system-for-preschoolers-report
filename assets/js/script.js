/* Loads bootstrap */
import bootstrap from 'bootstrap';

/* ANCHORS */
anchors.options = {
    placement: 'left',
    icon: '#'
};

anchors.add();


/* SCROLLSPY */
window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('data-id');
			if (entry.intersectionRatio > 0) {
        // const navItem = document.querySelector(`#toc ul li a[href="#${id}"]`);
        document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
  // const dataId = document.querySelector('section[data-id]');
  // console.log(dataId);
	document.querySelectorAll('section[data-id]').forEach((section) => {
		observer.observe(section);
	});
	
});

/* THEME SELECTOR */
/*
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme());

  const showActiveTheme = theme => {
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
    })

    btnToActive.classList.add('active')
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
  })
})()

