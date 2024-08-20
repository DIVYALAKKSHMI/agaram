import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",  # Use the password for the XAMPP MySQL root user
        database="registered_users",
        port=3306
    )

    if connection.is_connected():
        # db_Info = connection.get_server_info()
        # print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("SELECT DATABASE();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)

        cursor.execute("SHOW DATABASES")
        for db in cursor:
            print(db)

except Error as e:
    print("Error: ", e)

finally:
    if 'connection' in locals() and connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
