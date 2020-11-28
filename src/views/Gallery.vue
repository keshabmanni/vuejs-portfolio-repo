<template>
  <div class="gallery">
    <div class="experience">
      <h2 class="timeline-title">Experience</h2>
      <div class="exp-box">
        <div class="timeline-2">
          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-briefcase"></i>
            </div>

            <div class="item_inner">
              <h3 class="grade-level">
                Technovert, Hydrabad <i class="duration">May-July 2019</i>
              </h3>
              <i class="score"> Intern RPA Developer </i>
              <h5>UiPath, Automation Anywhere</h5>

              <h4 class="institute-name">
                - Worked on Hiring Process, Payroll, Expense report and Exit
                process Automation with Keka and Naukari.com platform, by
                reducing cost and time by more than 70% with Automation Tools.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="education">
      <h2 class="timeline-title">Education</h2>
      <div class="ed-box">
        <div class="timeline-1">
          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="item_inner">
              <h3 class="grade-level">
                B. Tech (CSE) <i class="duration">2016-2020</i>
              </h3>
              <h5 class="score">6.76 GPA</h5>
              <h5 class="institute-name">
                Aditya Engineering College(JNTUK), AP, India
              </h5>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="item_inner">
              <h3 class="grade-level">
                +2 / Intermediate <i class="duration">2014-2016</i>
              </h3>
              <h5 class="score">60%</h5>
              <h5 class="institute-name">
                M.P. Secondary School, Nepalgunj,Banke, Nepal
              </h5>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="item_inner">
              <div>
                <h3 class="grade-level">
                  10th / SLC <i class="duration">2010-2012</i>
                </h3>
                <h5 class="score">71%</h5>
              </div>
              <h5 class="institute-name">
                Shiva Secondory School, Chure-02, Kailali, Nepal
              </h5>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="item_inner">
              <h4 class="grade-level">
                5th - 8th <i class="duration">2008-2010</i>
              </h4>
              <h5 class="score"></h5>
              <h5 class="institute-name">
                Durga Secondary School, Lamautya, Doti, Nepal
              </h5>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="item_inner">
              <h4 class="grade-level">
                1st - 5th <i class="duration">2003-2008</i>
              </h4>
              <h5 class="score"></h5>
              <h5 class="institute-name">
                Adarsh Primary School, Badikedar-1, Doti, Nepal
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  margin: 0px;
  margin-right: 10vw;
}
body {
  font-family: "Poppins", sans-serif;
}
.gallery {
  width: 70vw;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.education {
  flex: 50%;
}
.experience {
  flex: 50%;
}

.ed-box,
.exp-box {
  padding-top: 5px;
  padding-bottom: 5px;
}
.timeline-1,
.timeline-2 {
  margin-left: 30px;
  border-left: 2px dashed rgba(255, 75, 10, 0.904);
}
.timeline-item {
  text-align: left;
  letter-spacing: 1.5px;
  position: relative;
  padding: 0px 10px 10px 30px;
}
.timeline-icon {
  left: -18px;
  top: 0;
  background-color: rgba(65, 145, 236, 0.945);
  position: absolute;
  border-radius: 60px;
  padding: 3px;
}
.timeline-icon i {
  font-size: 15px;
  padding: 3px;
}
.grade-level {
  color: yellow;
}
.duration {
  color: rgba(65, 145, 236, 0.945);
  font-size: 15px;
}
h2,
h3,
h4,
h5 {
  margin: 10px;
}
@media (max-width: 800px) {
  .gallery {
    flex-direction: column;
  }
}
</style>
<style>
body {
  display: -webkit-box;
  display: flex;
}
</style>

<script></script>
