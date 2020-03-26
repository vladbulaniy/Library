var Book = Book || {};

(function () {
    var self = this;
    self.isEditBook = ko.observable(false);
    self.isAddingBook = ko.observable(false);
    /*
    var BookModel = ko.validatedObservable({
        Name: ko.observable().extend({ required: true }),
        Date: ko.observable().extend({ required: true }),
        AuthorsIds: ko.observableArray([]).extend({ required: true }),
        Rate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Rating: ko.observable().extend({ required: true }),
        Pages: ko.observable().extend({ number: true, required: true })
    });
    */

    var BookModel = ko.observable({
        Name: ko.observable(),
        Date: ko.observable(),
        AuthorsIds: ko.observableArray([]),
        Rate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Rating: ko.observable(),
        Pages: ko.observable()
    });

    self.addBook = function () {
        self.isEditBook(true);
        self.isAddingBook(true);
    };



    function knockoutConfiguration(globalNode) {
      /*  ko.validation.init({
            decorateInputElement: true,
            errorMessageClass: 'errorMessageStyle'
        }, true);
        ko.mapping.defaultOptions().ignore = ["RatingArr"];*/
        //ko.applyBindings(self, $(globalNode)[0]);
        //ko.applyBindings(BookModel);
    };

    self.Init = function (releaseDateControlId, authorControlId, globalNode) {

       // $(authorControlId).selectpicker();
        /*
        $(releaseDateControlId).datepicker({
            format: 'dd.mm.yyyy'
        });
        */
        knockoutConfiguration(globalNode);
    };

}).apply(Book);





