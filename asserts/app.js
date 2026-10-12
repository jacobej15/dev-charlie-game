const teams = JSON.parse(sessionStorage.getItem("teams")) || [];

teams.forEach(function (team) {
  document.querySelector("#teamList").innerHTML += `
    <li>
      ${team.name1} + ${team.name2}:
      <a href="pages/${team.page}">
        ${team.page}
      </a>
    </li>`;
});

for (let i = 0; i < sessionStorage.length; i++) {
  const key = sessionStorage.key(i);
  console.log(key, sessionStorage.getItem(key));
  document.querySelector("#teamList").innerHTML += `
   <li>
      ${i} + . ${key}: ${key(i)}
    </li>`;
}