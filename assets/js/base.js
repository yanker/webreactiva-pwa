$(document).ready(function () {
  // Carga de Audios
  //   $.ajax({
  //     url: 'assets/audios/episodios.json',
  //     type: 'POST',
  //     dataType: 'json',
  //     success: function (json) {
  //       $.each(json.data, function (index, value) {
  //         $('#episodio').append($('<option>').text(value.title).attr('value', value.audio_file));
  //       });
  //     },
  //   });
  $('#episodio').on('change', function () {
    var sourceUrl = '';
    sourceUrl = 'assets/audios/' + this.value;
    $('#reproductor').attr('src', sourceUrl);
  });
  // -->
});
