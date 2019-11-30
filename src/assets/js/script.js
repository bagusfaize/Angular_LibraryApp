
$(function () {

    var tBody = $('#tabeldata');


    function ambilData() {
        var no = 1;
        var jqxhr = $.get({
            url: "http://localhost:8070/books",
            cache: false
        }).done(function (data) {
            console.log(data.data);
            for (book of data.data) {
                const {
                    id,
                    judul,
                    penerbit,
                    harga,
                    stok
                } = book;
                var tr = $('<tr>');
                tr.append('<td>' + no + '</td>');
                tr.append('<td>' + judul + '</td>');
                tr.append('<td>' + harga + '</td>');
                var btnDetail = $('<button>', {
                    'data-id': id,
                    'data-judul': judul,
                    'data-penerbit': penerbit,
                    'data-harga': harga,
                    'data-stok': stok,
                    text: 'Detail',
                    class: 'btn btn-sm btn-info',
                    click: detailData
                });
                var btnDelete = $('<button>', {
                    'data-id': id,
                    text: 'Hapus',
                    class: 'btn btn-sm btn-danger m-1',
                    click: deleteData,
                });
                tr.append(btnDetail);
                tr.append(btnDelete);
                tBody.append(tr);
                no++;
            };

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('ERROR' + textStatus);
        }).always(function () {
            console.log('FINISHED');
        });
    };

    ambilData();


    var deleteData = function () {
        var id = $(this).data("id");
        console.log(id + ' akan dihapus');
        $.ajax({
            url: 'http://localhost:8070/books/' + id,
            type: 'DELETE',
            error: function () {
                $('#alertError').show();
                $('#alertError').fadeIn();
                $('#alertError').slideDown();
            },
            success: function (result) {
                $('#alertSucces').show();
                $('#alertSucces').fadeIn();
                $('#alertSucces').slideDown();
                console.log(result);
            }
        });
    };

    $('#rifres').click(function () {
        $('tbody').empty();
        ambilData();
    });


    var detailData = function () {
        var modal = $('#form-modal');

        modal.addClass('modal-loading');
        
        modal.find('modal-title').text('View Data');
        
        modal.modal('show');

        var id = $(this).data('id');
        var judul = $(this).data('judul');
        var penerbit = $(this).data('penerbit');
        var harga = $(this).data('harga');
        var stok = $(this).data('stok');



        var jqXHR = $.get({
            url: 'http://localhost:8070/books/',
            cache: false
        }).done(function (data) {
            modal.removeClass('modal-error');

            modal.find('#idbuku').val(id);
            modal.find('#judulbuku').val(judul);
            modal.find('#penerbit').val(penerbit);
            modal.find('#harga').val(harga);
            modal.find('#stok').val(stok);

        }).fail(function (jqXHR, textStatus, errorThrown) {
            $('.modal .error').text('textStatus');
            modal.addClass('modal-error');
        }).always(function () {
            modal.removeClass('modal-loading');
        })
    }

});