CREATE TABLE [dbo].[Autor_Book]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [AutorId] INT NOT NULL, 
    [BookId] INT NOT NULL, 
    CONSTRAINT [FK_Autor_Book_ToAutor] FOREIGN KEY ([AutorId]) REFERENCES [Autor]([Id]),
	CONSTRAINT [FK_Autor_Book_ToBook] FOREIGN KEY ([BookId]) REFERENCES [Book]([Id])
)
