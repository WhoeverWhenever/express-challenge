function getAllStudents(studentsData) {
    return (req, res) => {
        res.json(studentsData);
    }
}

function getWorstHomeworkStudent(studentsData) {
    return (req, res) => {
        const { type } = req.query;
        const scores = studentsData.map((stud) => {
            return stud.scores.filter((value) => {
                return value.type === type;
            });
        }).flat();
        const lowestScore = Math.min(...scores.map(stat => stat.score));
        const worstHomework = studentsData.find((stud) => {
            return stud.scores.find((value) => {
                return value.type === type && value.score < Number(lowestScore.toFixed(2));
            });
        })
        res.json(worstHomework);
    }
}

module.exports = {
    getAllStudents,
    getWorstHomeworkStudent
}