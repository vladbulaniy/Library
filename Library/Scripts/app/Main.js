var Library = Library || {};

(function () {
    var self = this;
    /*
    var BookModel = ko.validatedObservable({
        Name: ko.observable().extend({ required: true }),
        Date: ko.observable().extend({ required: true }),
        AuthorsIds: ko.observableArray([]).extend({ required: true }),
        Rate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
       // Rating: ko.observable().extend({ required: true }),
        Pages: ko.observable().extend({ number: true, required: true })
    });
    */
    var BookModel = ko.observable({
        Name: ko.observable(),
        Date: ko.observable(),
        AuthorsIds: ko.observableArray([]),
        Rate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        // Rating: ko.observable().extend({ required: true }),
        Pages: ko.observable()
    });

    self.books = ko.observableArray([]);
    self.isEditBook = ko.observable(false);
    self.isAddingBook = ko.observable(false);
    self.shouldShowMessage = ko.observable();
    self.editableBook = ko.observable(BookModel);
    //self.editableBook = ko.observable();
    self.currentAutor = ko.observable();
    //initBookTable();


    self.addBook = function () {
        self.isEditBook(true);
        self.isAddingBook(true);
    };

    self.saveBook = function () {
       // self.books.push(self.editableBook());
        /*
        if (BookModel.isValid()) {
            $.post(self.saveBookUrl, ko.mapping.toJS(self.editableBook()))
                .done(function () {
                    toastr.success('Book successfully added');                   
                    self.isAddingBook(false);
                    self.isEditBook(false);
                })
                .fail(function (e) {
                    toastr.success('Book successfully created');
                });
        } else {
            BookModel.errors.showAllMessages();
        }
        */
        console.log(self.editableBook());
        $.post(self.saveBookUrl, ko.mapping.toJS(self.editableBook()))
            .done(function () {
                //toastr.success('Book successfully added');
                self.isAddingBook(false);
                self.isEditBook(false);
            })
            .fail(function (e) {

                toastr.success('Book successfully created');
            });
    };

    this.removeBook = function (book) {
        self.books.remove(book);
    };

    self.editBook = function (book) {
        self.editableBook(book);
        self.isEditBook(true);
        self.isAddingBook(false);
    };

    self.updateBook = function () {
        self.isEditBook(false);
        self.isEditBook(false);
    };

    self.editAutor = function (autor) {
        self.currentAutor(autor);
        $("#edit-autor-modal").modal('show');
    };

    self.saveAutor = function (autor) {
        $("#edit-autor-modal").modal('hide');
    };

    self.getBooks = function () {
        $.get("books/getBooks")
            .done(function (data) {
                console.log('data  = ', data);
            });
    };

    function RenderAuthorRow(data) {
       // var autrhorsLookupValueArr = data.split(';')
        var outputHtml = '';
        /*
        for (var i = 0; i < autrhorsLookupValueArr.length; i++) {

            var authorArr = autrhorsLookupValueArr[i].split('#');

            if (authorArr[0].length != 0) {
                outputHtml += '<a href="author/Author/Edit/' + authorArr[1] + '/' + authorArr[0] + '">' + authorArr[1] + '</a>; ';
            }
        }
        */
        return outputHtml;
    };

    function RenderButtonsRow(data) {
        var outputHtml = '';

        outputHtml += "<div id='edit_btn' data-id='" + data + "' class='btn btn-info edit_btn' role='button' onclick='Book.onEditClick(this)'>Edit</div> ";
        outputHtml += "<div id='delete_btn' class='btn btn-info' role='button' data-id='" + data + "'' onclick='Catalog.onDelete(this)'>Delete</div>";

        return outputHtml;
    };

    self.Init = function (tableId) {

        $('#bookTable').DataTable({
            "paging": true,
            "serverSide": true,
            "ordering": false,
            "ajax": {
                "url": "/Books/GetBooks",
                "type": "GET",
                "datatype": "json"
            },
            "columns": [
                { "data": "Name" },                
                { "data": "Date", "searchable": "false" },
                { "data": "Author", "searchable": "false" },
                { "data": "Rate", "searchable": "false" },
                { "data": "Pages", "searchable": "false" }                
                //"data": "Autor Atrr"
            ],
            columnDefs: [                
                {
                    targets: 5,
                    data: "Author",
                    render: function (data, type, row, meta) {
                        return RenderAuthorRow(data);
                    }
                },
                {
                    targets: 6,
                    data: "Id",
                    render: function (data, type, row, meta) {
                        return RenderButtonsRow(data);
                    }
                }
            ]
        });

        ko.applyBindings(self, $('#container')[0]);
    };
}).apply(Library);

//ko.applyBindings(new InitBooksData());


