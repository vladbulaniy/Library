CREATE TABLE [dbo].[Autor]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [FirstName] NCHAR(50) NOT NULL, 
    [LastName] NCHAR(50) NOT NULL, 
    [Attributes] NCHAR(50) NOT NULL, 
    [BookQuantity] INT NOT NULL
)
