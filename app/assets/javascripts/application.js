//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/adding-css-javascript-and-images/
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

// accessible autocomplete

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  // Enhance select elements once DOM is ready
  const personSelect = document.querySelector('#person-picker')

  if (personSelect) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: personSelect
    })
  }
})