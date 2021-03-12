

-- USE StudentModel;


-- DROP Student;

CREATE TABLE Student(
    idStudent   INT IDENTITY(1,1),
    nameStudent VARCHAR(80),
    ageStudent  INT,
    PRIMARY KEY(idStudent),
);


-- INSERT INTO Student(
--     nameStudent,
--     ageStudent
-- )
-- VALUES(
--     "john",
--     31
-- );