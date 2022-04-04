<template>
    <div class="central container">
        <div class="splash xs-12 sm-10 md-8">
          <img
            src="../../assets/images/light/splash-screen.png"
            alt="splash-screen"
            class="splash-img xs-12">
        </div>
        <button
          class="
            btn btn-download flex jc-c ai-c
            dt-mt-10px
            dt-bgc-404040
            dt-c-f2f2f2
          "
          @click="onBtnDownloadClick"
          data-title="Click to download!">
            Download
          </button>
        <p class="desc p-20 br-5">
          PaperPen is a Software build for saving data or information easily by noting in the app. You can also Add, Delete Edit, Search, etc. in the PaperPen. PaperPen lets you set kind of note as Simple or Important note.
        </p>
        <div class="xs-12">

          <section class="section changes">
            <p class="section-title title-changes">Main Changes</p>
            <div class="grid xs-gtc-auto md-gtc-1fr-1fr">
              <div class="
                xs-gcs-1
                xs-grs-2
                md-gcs-1
                md-grs-1
                flex fd-c jc-c ai-c p-10px
              ">
                <div class="
                  box changes-desc
                  xs-p-10px
                  md-p-15px
                ">
                  <p class="ta-c fw-500 changes-desc-title">Theme</p>
                  <p>We added <span class="em">theme</span> function into this version.</p>
                  <p>To change theme, click on <span class="mark-u">view button</span>.</p>
                  <div class="changes-desc-divider to-tl"></div>
                  <div class="changes-desc-divider to-bl"></div>
                </div>
              </div>
              <div class="
                xs-gcs-1
                xs-grs-1
                md-gcs-2
                md-grs-1
              ">
                <img
                  src="../../assets/images/light/theme.png"
                  alt="theme"
                  class="xs-12">
              </div>
            </div>
            <div class="divider"></div>
            <div class="grid xs-gtc-auto md-gtc-1fr-1fr">
              <div class="
                xs-gcs-1
                xs-grs-2
                md-gcs-1
                md-grs-1
                flex fd-c jc-c ai-c p-10px
              ">
                <div class="
                  box changes-desc
                  xs-p-10px
                  md-p-15px
                ">
                  <p class="ta-c fw-500 changes-desc-title">Filter</p>
                  <p>We added <span class="em">filter</span> function into this version.</p>
                  <p>To change filter, click on <span class="mark-u">filter button</span>.</p>
                  <div class="changes-desc-divider to-tl"></div>
                  <div class="changes-desc-divider to-bl"></div>
                </div>
              </div>
              <div class="
                xs-gcs-1
                xs-grs-1
                md-gcs-2
                md-grs-1
              ">
                <img
                  src="../../assets/images/light/filter.png"
                  alt="theme"
                  class="xs-12">
              </div>
            </div>
          </section>

          <h2 class="fw-normal ta-c ins">Instruction</h2>
          <section class="section">
            <h3 class="fw-normal section-title">1. Home</h3>
            <div class="wrap">
              <img
                src="../../assets/images/light/home.png"
                alt="home"
                class="xs-12 md-6">
              <div class="
                xs-12 md-6
                flex fd-c jc-c ai-c
              ">
                <p class="p-10">Home page of PaperPen System has functions:</p>
                <ul class="p-10 ul">
                  <li><p>– Button Search for searching any notes.</p></li>
                  <li><p>– + used to presents adding note.</p></li>
                </ul>
              </div>
            </div>
          </section>
          <section class="section">
            <h3 class="fw-normal section-title">2. Add</h3>
            <div class="wrap">
              <img
                src="../../assets/images/light/add.png"
                alt="add"
                class="xs-12 md-6">
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-10">Steps to add note first click on + sign then it will popup a form that contains textboxes that you want to note and those are:</p>
              </div>
              
              <ul class="xs-12 p-10  ul">
                <li><p>– Title : is the name of your note.</p></li>
                <li><p>– Content : is the body part of your note. It describes full information of your note.</p></li>
                <li><p>– Date : is the date that your note is created for.</p></li>
                <li><p>– Important : is kind of your note. Check it, if your note is Important another wise is Simple.</p></li>
              </ul>
              
              <div class="xs-12 flex fd-c jc-c ai-c">
                <ul class="p-10 ul">
                  <li><p class="p-note ml-10 w-fc">Note:</p></li>
                  <li><p>– Important Note has <em>Green</em> Background.</p></li>
                  <li><p>– Simple Note has <em>Cyan</em> Background.</p></li>
                </ul>
              </div>

            </div>
          </section>

          <section class="section">
            <h3 class="fw-normal section-title">3. Edit</h3>
            <div class="wrap">
              <img
                src="../../assets/images/light/edit.png"
                alt="edit"
                class="xs-12 md-6">
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-10">When you want to edit note you can do that by just clicking on that note then it will popup the editing panel for you. Click edit to save your new information.</p>
              </div>
            </div>
          </section>

          <section class="section">
            <h3 class="fw-normal section-title">4. Delete</h3>
            <div class="wrap">
              <img
                src="../../assets/images/light/delete.png"
                alt="delete"
                class="xs-12 md-6">
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-10">To delete any note, just long click with left mouse button on that note then it will alert the confirmation dialog asks you to confirm deletion.</p>
              </div>
              <ul class="xs-12 p-10 ul">
                <li><p>– If you really want to delete, click on button Yes.</p></li>
                <li><p>– If you don't want to delete, click on button No.</p></li>
              </ul>
            </div>
          </section>

          <section class="section">
            <h3 class="fw-normal section-title">5. Search</h3>
            <div class="wrap">
              <img
                src="../../assets/images/light/search.png"
                alt="search"
                class="xs-12 md-6">
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-10">In case you have a lot of notes and difficult to find your looking note you will find it faster with searching. To search you can use textbox search on the window.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
</template>
<script>
import base from "../../constants/url";

export default {
  methods: {
    onBtnDownloadClick() {
      window.open(base + "/files/download/1/PaperPen2-Setup.exe", "_self");
    }
  }
}
</script>
<style scoped>
    .em {
      font-weight: 500;
      color: #2a5bb5;
    }
    .mark-u {
      border-bottom: 1px solid #30303082;
    }
    .central {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .splash {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .splash-img {
      border-radius: 5px;
    }
    .ins {
        padding: 10px 0px;
        border-bottom: 1px solid rgba(119, 119, 119, 0.412);
        color: #006779;
    }
    .desc {
        margin: 30px 0px;
        background-color: #e5e5e5;
        box-shadow: 0px 0px 6px 1px #a1a1a16b;
    }
    .btn-download {
        background-color: #e8e8e8;
        color: #202020;
        padding: 7px 10px;
    }
    .btn-download:hover, .btn-download:active { 
        transform: scale(1, 1);
        filter: brightness(1);
        background-color: #c0c0c0;
    }
    .btn-download:active { 
        background-color: #b0b0b0;
    }
    .section {
        margin: 20px 0px;
        padding: 10px;
        background-color: #e5e5e5;
        box-shadow: 0px 0px 6px 1px #a1a1a16b;
    }
    .section-title {
        margin-left: 20px;
        margin-bottom: 10px;
        color: #1c4a86;
    }
    .section img {
      box-shadow: 0px 0px 6px 1px #b3b3b3;
    }
    .ul {
        list-style: none;
    }
    .p-note {
        color: #eb2828;
        border-bottom: 1px solid #eb2828;
    }
    .changes .divider {
      margin-top: 25px;
      margin-bottom: 25px;
      background: #aaa;
    }
    .title-changes {
      font-size: 17px;
      font-weight: 500;
      max-width: fit-content;
      padding-bottom: 2px;
      border-bottom: 1px solid #00677974;
      color: #006779;
    }
    .changes-desc {
      padding-top: 0px;
      border-left: 2px solid #00677997;
    }
    .changes-desc-title {
      color: #006779;
    }
    .changes-desc-divider {
      width: 8%;
      height: 2px;
      background-color: #00677997;
    }
</style>
