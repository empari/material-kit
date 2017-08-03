window.$(document).ready(function () {
  // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
  window.$.material.init()

  window.$('.datepicker').datepicker({
    format: 'dd/mm/yyyy'
  })

  //  Activate the Tooltips
  window.$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip()
})
