
var allBooks = [
    {
        id: 0,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date(2011, 0, 1).toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 1,
        name: "Heidi ",
        date: new Date('October 05, 1815').toLocaleDateString(),
        autor: "Johanna Spyri",
        rate: 2,
        pages: 789,
        autorAtrr: "Around 1875"
    }, {
        id: 2,
        name: "Meus Artigos",
        date: new Date('March 17, 1874').toLocaleDateString(),
        autor: "Jacob Burckhardt",
        rate: 18,
        pages: 550,
        autorAtrr: "Phaidon-Verlag"
    }, {
        id: 3,
        name: "The Sketch Book",
        date: new Date('May 08, 1805').toLocaleDateString(),
        autor: "Washington Irving",
        rate: 5,
        pages: 258,
        autorAtrr: "William Lyon Phelps (1865-1943)"
    }, {
        id: 4,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 5,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 6,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 7,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 8,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 9,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 10,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 11,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 12,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 13,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 14,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 15,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }
];

var Book = function (book) {
    var self = this;
    self.name = ko.observable(book.name);
    self.date = ko.observable(book.date);
    self.autor = ko.observable(book.autor);
    self.rate = ko.observable(book.rate);
    self.pages = ko.observable(book.pages);
    self.autorAtrr = ko.observable(book.autorAtrr);
};


function InitBooksData(allBooks) {
    var self = this;

    self.books = ko.observableArray([]);
    // self.books(allBooks);
    self.isEditBook = ko.observable(false);
    self.isAddingBook = ko.observable(false);
    self.shouldShowMessage = ko.observable();
    self.editableBook = ko.observable('');
    self.editableBook = {};

    if (typeof allBooks !== 'undefined') {
        $.each(allBooks, function (i, el) {
            //self.books.push(new Book(el));
            self.books.push(new Book({
                id: el.id,
                name: el.name,
                date: el.date,
                autor: el.autor,
                rate: el.rate,
                pages: el.pages,
                autorAtrr: el.pages
            }));
        });
    }


    self.addBook = function () {
        //self.books.push();
        self.isEditBook(true);
        self.isAddingBook(true);
    }

    self.addNewBook = function () {
        self.editableBook.date = '17.04.2019'
        self.books.push(new Book({
            name: self.editableBook.name,
            date: self.editableBook.date,
            autor: self.editableBook.autor,
            rate: self.editableBook.rate,
            pages: self.editableBook.pages,
            autorAtrr: self.editableBook.pages
        }));
        console.log(self.books());
        self.isAddingBook(false);
    }

    this.removeBook = function (book) {
        self.books.remove(book);
    }

    self.editBook = function (book) {
        console.log(book)
        self.editableBook = ko.mapping.fromJS(book);
        self.editableBook.name(book.name());
        console.log(self.editableBook.name());
        self.isEditBook(true);
    }

    self.updateBook = function (book) {
        console.log('book = ', self.editableBook.name())
        tempBook.name(self.editableBook.name());
        self.isEditBook(false);
    }
}

ko.applyBindings(new InitBooksData(allBooks));






/*
var initialData = [{
    "name": "Living Room",
    "furnitures": [{
        "name": "Bookshelf",
        "size": "Medium"
    }]
}, {
    "name": "Bedroom",
    "furnitures": [{
        "name": "Bed",
        "size": "Large"
    }, {
        "name": "Night Table",
        "size": "Small"
    }, {
        "name": "Jacuzzi",
        "size": "Large"
    }]
}];
var Furniture = function (data) {
    var self = this;
    self.name = ko.observable('');
    self.size = ko.observable('');
    if (typeof data !== 'undefined') {
        self.name(data.name);
        self.size(data.size);
    }
}
var Room = function (name, furnitures) {
    var self = this;
    self.name = ko.observable(name);
    self.furnitures = ko.observableArray([]);
    if (typeof furnitures !== 'undefined') {
        $.each(furnitures, function (i, el) {
            self.furnitures.push(new Furniture({ name: el.name, size: el.size }));
        });
    }
    self.removeFurniture = function (furniture) {
        self.furnitures.remove(furniture);
    };
    self.addFurniture = function () {
        console.log("added");
        self.furnitures.push(new Furniture({ name: '', size: '' }));
    };
};

var HouseModel = function (rooms) {
    var self = this;
    self.save = function () {
        console.log("do stuff");
    };
    self.lastSavedJson = ko.observable('');
    self.rooms = ko.observableArray([]);
    if (typeof rooms !== 'undefined') {
        $.each(rooms, function (i, el) {
            self.rooms.push(new Room(el.name, el.furnitures));
        });
    }

    self.addRoom = function (name) {
        self.rooms.push(new Room(name));
    };

    self.removeRoom = function (room) {
        self.rooms.remove(room);
    };
};

ko.applyBindings(new HouseModel(initialData));
*/