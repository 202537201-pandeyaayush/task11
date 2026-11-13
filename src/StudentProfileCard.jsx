function StudentProfileCard({ name, studentId, major, year, gpa, initials }) {
  const letters = initials || name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return (
    <article className="profile-card">
      <div className="card-top">
        <div className="avatar" aria-hidden="true">{letters}</div>
        <div>
          <p className="label">STUDENT PROFILE</p>
          <h3 className="student-name">{name}</h3>
          <span className="student-id">ID: {studentId}</span>
        </div>
      </div>
      <div className="info-grid">
        <div className="info-row"><strong>Major</strong><span>{major}</span></div>
        <div className="info-row"><strong>Year</strong><span>{year}</span></div>
        <div className="info-row gpa"><strong>GPA</strong><span>{gpa}</span></div>
      </div>
      <div className="card-foot"><span>GACHON UNIVERSITY</span><span>ACADEMIC PROFILE</span></div>
    </article>
  );
}
export default StudentProfileCard;
