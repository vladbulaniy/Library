CREATE TABLE [dbo].[Autor]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [FirstName] NCHAR(150) NOT NULL, 
    [LastName] NCHAR(150) NOT NULL, 
    [Attributes] NCHAR(150) NOT NULL, 
    [BookQuantity] INT NOT NULL
)
