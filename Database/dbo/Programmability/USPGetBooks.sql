CREATE PROCEDURE USPGetBooks
(
  @SearchExpression VARCHAR(MAX),
  @Start INT,
  @Length INT,
  @TotalFilter INT OUT
)
AS
BEGIN

	SELECT
		B.Id,
		B.Name,
		B.Date,
		B.Rate,
		B.Pages,
		(SELECT DISTINCT CONCAT(A.FirstName + ' ' + A.LastName, ';') 
				FROM Autor AS A
				JOIN Autor_Book AS AB ON A.Id = AB.AutorId AND AB.BookId = B.Id
				FOR XML PATH('')) AS Author
	INTO #Books
	FROM Autor_Book AS AB
	INNER JOIN Book AS B ON AB.BookId = B.Id
	WHERE B.Name LIKE '%'+ ISNULL(@SearchExpression,'') +'%'
	GROUP BY B.Id, B.Name, B.Date, B.Rate, B.Pages
	

	SELECT @TotalFilter = COUNT(*) FROM #Books
	
	SELECT * 
	FROM #Books
	ORDER BY #Books.Name OFFSET @Start ROWS FETCH NEXT @Length ROWS ONLY

	DROP TABLE #Books
END