<template>
    <div class="container">
        <p class="
            doc-title
            xs-fs-20
            sm-fs-22
            md-fs-25
        ">Documentation:</p>
        <div class="contents ta-s bgc-ebebeb">
            <p>1. Documentation about
                <a href="#home" class="im">home</a>.
            </p>
            <p>2. Documentation about
                <a href="#docs" class="im">Docs</a>.
            </p>
            <p>3. Documentation about
                <a href="#labo" class="im">Labo</a>.
            </p>
            <p>4. Documentation about
                <a href="#login" class="im">Login</a>.
            </p>
        </div>
        
        <div class="flex jc-c">
            <p id="home" class="
                content-title
                xs-fs-20
                sm-fs-22
                md-fs-25
            ">1. Home</p>
        </div>
        <div class="ta-s desc">
            <p>Home page doesn't have many interesting things.</p>
            <p>In there, we just show you some introduction about us and main steps to start using our Lab.</p>
            <p>We also provide our contact that you can contact us or give us any feedback.</p>
            <p>Top sponsors were shown there. If you have anything to tell them, please do not hesitate.</p>
            <p>We always welcome you. From us Lab team.</p>
        </div>
        <div class="flex jc-c">
            <h2 id="docs" class="
                content-title
                xs-fs-20
                sm-fs-22
                md-fs-25
            ">2. Docs</h2>
        </div>
        <div class="ta-s desc">
            <p>Docs page is a page that tells you all about how lab app works.</p>
            <p>You can find solutions on Docs page when you have any problem.</p>
            <p>Docs contains documents about home page, labo page storage page...</p>
            <p>If you meet any problem please come back to Docs page.</p>
        </div>
        <div class="flex jc-c">
            <h2 id="labo" class='
                content-title
                xs-fs-20
                sm-fs-22
                md-fs-25
            '>3. Labo</h2>
        </div>
        <div class="ta-s desc">
            <p>Labo page was designed to serve you about your data management.</p>
            <p>In there, you can modify you data like create, delete update, download...</p>
            <p>Labo provide you nice and simple ui, so you can use it easily.</p>
            <p>We hope you like the way it was designed and can manage your data as you want.</p>
        </div>
        <div class="flex jc-c">
            <h2 id="login" class='
                content-title
                xs-fs-20
                sm-fs-22
                md-fs-25
            '>4. Login</h2>
        </div>
        <div class="ta-s desc pb-20">
            <p>Login page lets you sign in to identify who you are and we can provide the data of you.</p>
            <p>If you don't have any account yet, you can create new one by clicking create new button.</p>
            <p>And if you forget your password, you also can reset it as well by clicking on reset password button.</p>
            <p>After you logged in in 24 hours inactive, we will log you out automatically because of security reason.</p>
            <p>To work with Lab start login first.</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .content-title {
        margin-top: 20px;
        font-weight: bold;
        border-bottom: 1px solid #2c3e50a6;
        line-height: 1.3;
    }
    .desc {
        padding-top: 20px;
        max-width: 700px;
        margin: 0px auto;
    }
    .doc-title {
        border-bottom: solid 1px;
        width: fit-content;
        padding-top: 25px;
        line-height: 1.1;
        font-weight: bold;
        border-color: #2c3e50a6;
    }
    .contents {
        border: solid 5px rgba(22, 172, 54, 0.733);
        border-bottom-width: 0px;
        border-top-width: 1px;
        border-right-width: 0px;
        margin-top: 20px;
        padding: 20px;
    }
    .im {
        cursor: default;
    }
    p {
        font-weight: 500;
    }
</style>
