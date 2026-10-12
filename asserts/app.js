const teamList = document.querySelector("#teamList");

if (teamList) {
  const teams = JSON.parse(sessionStorage.getItem("teams") || "[]");

  teamList.innerHTML = "";

  teams.forEach(function (team) {
    if (!team || !team.page) return;

    const label = [team.name1, team.name2].filter(Boolean).join(" + ");
    const pageLink = `pages/${team.page}`;

    teamList.innerHTML += `
      <li class="list-group-item">
        ${label ? `${label}: ` : ""}
        <a href="${pageLink}" target="_blank" rel="noopener noreferrer">
          ${team.page}
        </a>
      </li>`;
  });

  Object.keys(sessionStorage).forEach((key, index) => {
    if (key === "teams") return;

    teamList.innerHTML += `
      <li class="list-group-item">
        ${index + 1}. ${key}: ${sessionStorage.getItem(key)}
      </li>`;
  });
}