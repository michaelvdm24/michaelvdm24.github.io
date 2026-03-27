// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

function groupBy(arr, n) {
  var group = [];
  for (var i = 0, end = arr.length / n; i < end; ++i) group.push(arr.slice(i * n, (i + 1) * n));
  return group;
}

var toggled = 0;
function toggle() {
  toggled++;
  if (toggled % 2 == 0) {
    $('.photos').hide();
    $('.togglephotos').html('Click <span class="fakein" onclick="toggle();">here</span> to see snippets of my life!</p>');
  } else {
    $('.photos').show();
    $('.togglephotos').html('Click <span class="fakein" onclick="toggle();">here</span> to collapse.</p>');
  }
}

$('.introscroll').click(function() {
  document.getElementById('projects').scrollIntoView(true);
});


$(document).ready(function() {
  $.getJSON('/static/scripts/profile/projects.json', function(data) {
    const projects = data.projects;
    const experiences = data.experiences;
    const photos = data.photos;

    const electronicsProjects = projects.filter(proj => proj.category === "Electronics");
    const personalProjects = projects.filter(proj => proj.category === "Personal Projects");

    const renderProjects = (projects) => {
      const iw = window.innerWidth;
      const numInRow = iw < 768 ? 1 : iw < 992 ? 2 : 3;
      const batched = groupBy(projects, numInRow);

      return batched.map(function(row) {
        return `<div class="row switchrow" data-aos="fade-up">` +
          row.map(function(proj) {
            return `<div class="col-md-4 col-sm-6 col-xs-12 pitem pitema vizu">
                      <div class="link">
                        <a href="${proj.link}">
                          <img class="projectimage" src="${proj.src}">
                          <span class="projectname">${proj.name}</span>
                        </a>
                      </div>
                      <span class="procat">${proj.desc}</span>
                    </div>`;
          }).join('') + `</div>`;
      }).join('');
    };

    $("#electronics_section").html(renderProjects(electronicsProjects));
    $("#personal_section").html(renderProjects(personalProjects));

    const input1 = $.map(experiences, function(item) {
      return `<div data-aos="fade-left">
        <p>
          <h5><a href="${item.src}">${item.name}</a> | ${item.title} | ${item.dur}</h5>
          ${item.desc}
        </p>
      </div>`;
    });
    $("#experience_section").append(input1);

    const input2 = $.map(photos, function(photo) {
      return `<div class="photocontainer" data-aos="fade-up" style="${photo.style}">
                <a href="${photo.loc}">
                  <img class="photo" src="${photo.src}" style="max-width: ${photo.size};">
                  <div>${photo.desc}</div>
                </a>
              </div>`;
    });
    $("#photos").append(input2);
  });

});
