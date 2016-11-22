$('#datetimepicker').datepicker({});
$('#domain').select2({
  ajax: {
    url: '/domains',
    processResults: function (data) {
      return {
        results: data
      };
    }
  }
});
