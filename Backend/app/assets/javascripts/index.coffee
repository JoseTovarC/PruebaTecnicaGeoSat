$ ->
  $.get "/resources", (resources) ->
    $.each resources, (index, resource) ->
      $("#resources").append $("<li>").text resource.name