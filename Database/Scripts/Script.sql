DECLARE @Transaction_PostDepl NVARCHAR(MAX) = 'Post-Deployment Script';

BEGIN TRANSACTION @Transaction_PostDepl;

BEGIN TRY
 :r Author_Data_Insert.sql
 :r Books_Data_Insert.sql
 :r Autor_Book_Data_Insert.sql
 
 END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        BEGIN
            ROLLBACK TRANSACTION @Transaction_PostDepl;
        END;

    THROW;
END CATCH;

IF @@TRANCOUNT > 0
    BEGIN
        COMMIT TRANSACTION @Transaction_PostDepl;
    END;