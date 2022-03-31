<template>
    <div class="central container">
        <div class="xs-12 sm-10 md-8">
          <img src="../../assets/images/splash-screen.png" alt="splash-screen" class="xs-12">
        </div>
        <button
          class="
            btn btn-download flex jc-c ai-c
            dt-mt-10px
            dt-bgc-fefefe
            dt-c-333
          "
          @click="onBtnDownloadClick"
          data-title="Click to download!">
            Download
          </button>
        <p class="desc p-20 br-5">
          PaperPen is a Software build for saving data or information easily by noting in the app. You can also Add, Delete Edit, Search, etc. in the PaperPen. PaperPen lets you set kind of note as Simple or Important note.
        </p>
        <div class="xs-12">
          <h2 class="fw-normal ta-c ins">Instruction</h2>
          <section class="section">
            <h3 class="fw-normal section-title">1. Home</h3>
            <div class="grid">
              <img
                src="../../assets/images/home-screen.png"
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
            <div class="grid">
              <img
                src="../../assets/images/add-screen.png"
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
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-note ml-10 as-fs">Note:</p>
                <ul class="p-10 ul">
                  <li><p>– Important Note has Green Background.</p></li>
                  <li><p>– Simple Note has Cyan Background.</p></li>
                </ul>
              </div>
              <img
                src="../../assets/images/add-screen-note.png"
                alt="add-note"
                class="xs-12 md-6">
            </div>
          </section>

          <section class="section">
            <h3 class="fw-normal section-title">3. Edit</h3>
            <div class="grid">
              <img
                src="../../assets/images/edit-screen.png"
                alt="edit"
                class="xs-12 md-6">
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-10">When you want to edit note you can do that by just clicking on that note then it will popup the editing panel for you. Click edit to save your new information.</p>
              </div>
            </div>
          </section>

          <section class="section">
            <h3 class="fw-normal section-title">4. Delete</h3>
            <div class="grid">
              <img
                src="../../assets/images/delete-screen.png"
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
            <div class="grid">
              <img
                src="../../assets/images/search-screen.png"
                alt="search"
                class="xs-12 md-6">
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p class="p-10">In case you have a lot of notes and difficult to find your looking note you will find it faster with searching. To search you can use textbox search on the window.</p>
              </div>
              <div class="xs-12 md-6 flex fd-c jc-c ai-c">
                <p>As a result you'll get:</p>
              </div>
              <img
                src="../../assets/images/search-screen-result.png"
                alt="add-note"
                class="xs-12 md-6">
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
      window.open(base + "/files/download/1/PaperPen-Setup.exe", "_self");
    }
  }
}
</script>
<style scoped>
    .central {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .ins {
        border-bottom: 1px solid #777a;
        padding: 10px 0px;
    }
    .desc {
        margin: 30px 0px;
        background-color: #383838;
    }
    .btn-download {
        background-color: #404040;
        color: #f9f9f9;
        padding: 7px 10px;
    }
    .section {
        margin: 20px 0px;
        padding: 10px;
        background-color: #353535;
    }
    .section-title {
        margin-left: 20px;
        color: #95bef5;
    }
    .ul {
        list-style: none;
    }
    .p-note {
        color: rgb(255, 160, 160);
        border-bottom: 1px solid rgb(255, 160, 160);
    }
</style>
