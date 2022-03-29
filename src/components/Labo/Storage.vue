<template>
    <div
        v-if="hasCredential"
        class="
            f-1 container wrapper
            xs-mt-10
            xs-mb-10
            sm-mt-15
            sm-mb-15
            md-mt-20
            md-mb-20
            xs-p-10
            sm-p-15
            md-p-20
        ">
        <div class="flex ai-c bgc-eee title-bar">
            <button
                @click="onBack" :class="{
                    'btn-icon': true,
                    'btn-disabled': !folder,
                }"
                :data-title="folder ? 'Back | backspace' : null"
                title-position="bb rl">
                <svg 
                    :class="{
                        'svg-icon': true,
                        'icon-disabled': !folder
                    }
                " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M333.436236 512.002048l363.098222-362.900598c18.226434-18.226434 18.226434-47.770666 0-65.998124s-47.770666-18.226434-65.998124 0L234.422666 479.000938c-18.226434 18.226434-18.226434 47.770666 0 65.998124l396.112643 395.942666c18.227458 18.18138 47.77169 18.18138 65.998124 0 18.226434-18.227458 18.226434-47.77169 0-65.998124L333.436236 512.002048z"/></svg>
            </button>
            <p class="
                dt-mt-5px
                dt-ml-5px
                dt-fs-14px
                name ele
                xs-mxw-150px
                sm-mxw-200px
                md-mxw-300px
                lg-mxw-400px
            "
                :data-title="folder ? '/' + folder : '/'"
                title-position="bb rl">/{{folder}}</p>
            <div class="f-1"></div>
            <!-- <form
                @submit="onSearch"
                class="
                    xs-d-n
                    md-d-us
                ">
                <Input
                    type="search"
                    placeholder="search..."
                    class="input-search" />
                <button class="d-n"></button>
            </form> -->
            <span
                v-if="moves.length"
                @mousedown="onBtnMoveClick"
                class="dt-mt-5px"
                data-title="Paste | ctr + v"
                title-position="bb lc">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M840.704 256h-36.992c-82.624 0-82.496-128-140.864-128H311.232C245.44 128 192 181.44 192 247.296V384h64V247.296C256 216.832 280.832 192 311.232 192h339.456c3.968 6.144 9.024 15.36 12.672 22.208C684.8 253.76 720.704 320 803.712 320h36.992C869.12 320 896 351.104 896 384v392.768c0 30.4-24.832 55.232-55.296 55.232H311.232c-30.4 0-55.232-24.832-55.232-55.232V704h-64v72.768C192 842.624 245.44 896 311.232 896H840.64C906.56 896 960 842.624 960 776.768V384c0-65.856-53.44-128-119.296-128z"  /><path d="M497.344 693.824L630.4 563.968c0.128-0.128 0.192-0.32 0.32-0.512 2.816-2.816 5.184-9.536 6.784-13.248 1.344-3.456 1.856-0.64 2.112-4.096 0-0.768 0.384-1.408 0.384-2.112 0-0.512-0.256-0.896-0.256-1.344-0.192-3.84-0.896-5.76-2.24-9.344-1.344-3.264-3.52-6.016-5.76-8.64-0.512-0.64-0.768-1.536-1.344-2.112L497.344 389.632c-12.8-12.864-33.6-6.976-46.4 5.888-12.864 12.8-12.864 33.6 0 46.464l76.864 70.976-429.632 0.064c-18.752 0-33.984 12.8-33.92 30.912-0.064 18.112 15.168 29.696 33.984 29.696h429.632l-76.864 79.552c-12.864 12.864-12.864 33.6 0 46.528 6.4 6.4 14.72 3.776 23.168 3.776s16.832-3.328 23.168-9.664z"  /></svg>
            </span>
            <span
                v-if="copies.length"
                @mousedown="onBtnCopyClick"
                class="dt-mt-5px"
                data-title="Paste | ctr + v"
                title-position="bb lc">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M469.12 80.64h128a32 32 0 0 0 32-32 32 32 0 0 0-32-32h-128a32 32 0 0 0-32 32 32 32 0 0 0 32 32zM276.48 174.08a32 32 0 0 0 32-32v-29.44a32 32 0 0 1 31.36-32 32 32 0 0 0 32-32 33.28 33.28 0 0 0-32.64-32 96.64 96.64 0 0 0-94.72 96v29.44a32 32 0 0 0 32 32zM727.68 80.64h128a32 32 0 0 0 32-32 32 32 0 0 0-32-32h-128a32 32 0 0 0-32 32 32 32 0 0 0 32 32zM976 571.52a32 32 0 0 0-32 32v128a32.64 32.64 0 0 0 32 32 32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32zM912 794.88h-128a32.64 32.64 0 0 0-32 32 32 32 0 0 0 32 32h128a31.36 31.36 0 0 0 31.36-32 33.28 33.28 0 0 0-31.36-32zM1000.32 74.24A32 32 0 0 0 960 57.6a32.64 32.64 0 0 0-16.64 42.24 28.8 28.8 0 0 1 0 12.8v103.04a32.64 32.64 0 0 0 32 32 32 32 0 0 0 32-32V112.64a97.92 97.92 0 0 0-7.04-38.4zM976 312.96a32 32 0 0 0-32 32v128a32.64 32.64 0 0 0 32 32 32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32z" /><path d="M683.52 1006.08H112a96 96 0 0 1-96-96V259.84a96 96 0 0 1 96-96h571.52a96 96 0 0 1 96 96v650.24a96 96 0 0 1-96 96zM112 227.84a32 32 0 0 0-32 32v650.24a32 32 0 0 0 32 32h571.52a32 32 0 0 0 32-32V259.84a32 32 0 0 0-32-32z" /><path d="M604.16 423.68H192a32 32 0 0 1-32-32 32 32 0 0 1 32-32h412.16a32 32 0 0 1 32 32 32.64 32.64 0 0 1-32 32zM604.16 616.96H192a32 32 0 0 1 0-64h412.16a32 32 0 0 1 0 64zM604.16 810.24H192a32 32 0 0 1-32-32 32 32 0 0 1 32-32h412.16a32.64 32.64 0 0 1 32 32 32 32 0 0 1-32 32z" /></svg>
            </span>
            <button
                v-if="selectedIndexes.length"
                class="btn-icon dt-mt-5px"
                data-title="Select all | ctr + a"
                title-position="bb lc"
                @mousedown="onBtnSelectAllClick">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M37.488 308.368l459.936 250.64c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.096-1.248 14.704-3.728l464.768-250.64c10.144-5.456 16.432-16.112 16.272-27.632-0.144-11.568-6.688-22.048-16.944-27.28L531.088 19.76c-8.768-4.448-19.12-4.48-27.952-0.064L38.384 253.456c-10.288 5.184-16.88 15.648-17.056 27.184C21.152 292.176 27.376 302.864 37.488 308.368zM516.992 82.128l393.2 199.84-397.856 214.56L119.104 282.24 516.992 82.128zM985.728 481.296l-91.936-46.704L827.424 470.4l77.44 39.36L507.008 724.32 113.776 510.032l82.592-41.536-66.192-36.096-97.12 48.832C22.784 486.416 16.192 496.896 16 508.432c-0.176 11.536 6.048 22.224 16.16 27.728l459.936 250.64c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.112-1.248 14.704-3.728L986.4 536.224c10.128-5.456 16.432-16.112 16.272-27.648C1002.528 497.008 995.984 486.528 985.728 481.296zM985.728 698.304l-87.104-42.832-66.368 35.808 72.608 35.488-397.856 214.56L113.776 727.04l76.784-34.752-66.192-36.096-91.312 42.048C22.784 703.424 16.192 713.904 16 725.44c-0.176 11.536 6.048 22.224 16.16 27.728l459.936 250.656c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.112-1.248 14.704-3.728L986.4 753.232c10.128-5.456 16.432-16.112 16.272-27.648C1002.528 714.016 995.984 703.552 985.728 698.304z" /></svg>
            </button>
            <input
                type="file"
                class="d-n"
                id="input_file"
                multiple
                @input="onFileInput">
            <span
                @mousedown="onBtnCreateFolderClicked"
                class="dt-mt-5px"
                data-title="Create folder"
                title-position="bb lr">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M970.666667 213.333333H546.586667a10.573333 10.573333 0 0 1-7.54-3.126666L429.793333 100.953333A52.986667 52.986667 0 0 0 392.08 85.333333H96a53.393333 53.393333 0 0 0-53.333333 53.333334v704a53.393333 53.393333 0 0 0 53.333333 53.333333h874.666667a53.393333 53.393333 0 0 0 53.333333-53.333333V266.666667a53.393333 53.393333 0 0 0-53.333333-53.333334z m10.666666 629.333334a10.666667 10.666667 0 0 1-10.666666 10.666666H96a10.666667 10.666667 0 0 1-10.666667-10.666666V138.666667a10.666667 10.666667 0 0 1 10.666667-10.666667h296.08a10.573333 10.573333 0 0 1 7.54 3.126667l109.253333 109.253333A52.986667 52.986667 0 0 0 546.586667 256H970.666667a10.666667 10.666667 0 0 1 10.666666 10.666667z m-298.666666-309.333334a21.333333 21.333333 0 0 1-21.333334 21.333334H554.666667v106.666666a21.333333 21.333333 0 0 1-42.666667 0V554.666667H405.333333a21.333333 21.333333 0 0 1 0-42.666667h106.666667V405.333333a21.333333 21.333333 0 0 1 42.666667 0v106.666667h106.666666a21.333333 21.333333 0 0 1 21.333334 21.333333z" /></svg>
            </span>
            <span
                @mousedown="onBtnAddClicked"
                class="dt-mt-5px"
                data-title="Upload files"
                title-position="bb lr">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M279.272727 884.363636l279.272727 0c0-16.058182 2.048-31.650909 5.864727-46.545455L279.272727 837.818182 279.272727 884.363636z"  /><path d="M791.272727 1024 791.272727 930.909091 884.363636 930.909091 884.363636 837.818182 791.272727 837.818182 791.272727 744.727273 698.181818 744.727273 698.181818 837.818182 605.090909 837.818182 605.090909 930.909091 698.181818 930.909091 698.181818 1024Z"  /><path d="M744.727273 698.181818 279.272727 698.181818l0 46.545455 342.295273 0C654.382545 715.776 697.530182 698.181818 744.727273 698.181818z"  /><path d="M279.272727 279.272727l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z"  /><path d="M279.272727 558.545455l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z"  /><path d="M884.363636 204.8 681.239273 0 162.210909 0C162.210909 0 139.636364 0 139.636364 22.760727L139.636364 1001.192727C139.636364 1024 162.210909 1024 162.210909 1024l459.357091 0c-15.080727-13.312-27.973818-29.044364-38.120727-46.545455L186.181818 977.454545 186.181818 46.545455l465.454545 0 0 139.636364c0 46.545455 46.545455 46.545455 46.545455 46.545455l139.636364 0 0 490.356364c17.501091 10.146909 33.233455 23.04 46.545455 38.120727L884.363636 204.8z"  /><path d="M279.272727 139.636364l279.272727 0 0 46.545455-279.272727 0 0-46.545455Z"  /><path d="M279.272727 418.909091l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z"  /></svg>
            </span>
            <div class="box">
                <button
                    v-if="selectedIndexes.length"
                    class="btn-icon dt-ml-10px"
                    data-title="Options"
                    title-position="tt ll"
                    @mousedown="onBtnOptionClicked"
                    @blur="onBtnOptionBlur">
                    <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.996587 1020.586667C231.103147 1020.586667 3.413333 792.84224 3.413333 512 3.413333 231.154347 231.103147 3.413333 511.996587 3.413333 792.89344 3.413333 1020.586667 231.10656 1020.586667 512s-227.7376 508.586667-508.59008 508.586667z m0-940.885334C273.24416 79.691093 79.68768 273.24416 79.68768 512c0 238.752427 193.55648 432.295253 432.308907 432.295253 238.75584 0 432.295253-193.55648 432.295253-432.295253 0-238.742187-193.55648-432.308907-432.295253-432.308907v0.01024z" /><path d="M512 341.333333c47.146667 0 85.333333-38.186667 85.333333-85.333333s-38.186667-85.333333-85.333333-85.333333-85.333333 38.186667-85.333333 85.333333 38.186667 85.333333 85.333333 85.333333z m0 85.333334c-47.146667 0-85.333333 38.186667-85.333333 85.333333s38.186667 85.333333 85.333333 85.333333 85.333333-38.186667 85.333333-85.333333-38.186667-85.333333-85.333333-85.333333z m0 256c-47.146667 0-85.333333 38.186667-85.333333 85.333333s38.186667 85.333333 85.333333 85.333333 85.333333-38.186667 85.333333-85.333333-38.186667-85.333333-85.333333-85.333333z" /></svg>
                </button>
                <div
                    :class="{
                        'popup options flex fd-c jc-se': true,
                        'd-n': !showOptions
                    }"
                    @mousedown="onBlocker">
                    <button
                        @mousedown="onBtnOptionOpenClicked"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Open | enter"
                        title-position="tc ll">
                        <span>Open</span>
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onBtnOptionRenameClicked"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Rename | ctr + r"
                        title-position="tc ll">
                        <span>Rename</span>
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onBtnOptionDeleteClicked"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Delete | delete"
                        title-position="tc ll">
                        <span>Delete</span>
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onBtnOptionCopyClicked"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Copy | ctr + c"
                        title-position="tc ll">
                        <span>Copy</span>
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onBtnOptionMoveClicked"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Move | ctr + x"
                        title-position="tc ll">
                        <span>Move</span>
                    </button>
                    <div class="divider"></div>
                    <a download href="" id="a_download" class="d-n"></a>
                    <button
                        @mousedown="onBtnOptionDownload"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Download | ctr + s"
                        title-position="tc ll">
                        <span>Download</span>
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onBtnOptionCancel"
                        class="btn-icon btn-option flex jc-sb"
                        data-title="Cancel | esc"
                        title-position="tc ll">
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
        <svg v-if="processing" class="svg-icon process-icon process-icon-big" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        <div v-else class="box">
            <File
                v-for="(file, index) in files"
                :key="index"
                :name="file.name"
                :isFile="file.isFile"
                :index="index"
                :selectedIndexes="selectedIndexes"
                :last="(index == files.length - 1) || null"
                @onMouseDown="onFileSelect"
                @onDoubleClick="onBtnOptionOpenClicked" />
            <p
                class="status"
                v-if="files.length == 0">
                This folder has no file.
            </p>
            <div v-if="processLeft" class="nav-left-wrapper to-tl of-h">
                <div class="nav-left"></div>
            </div>
            <div v-if="processRight" class="nav-right-wrapper to-tl of-h">
                <div class="nav-right"></div>
            </div>
        </div>
        <div
            :class="{ 'backer': true, 'd-us': btnRenameClicked || btnDeleteClicked || fileInputted || btnCreateFolderClicked || btnMoveClicked || btnCopyClicked}"
            @click="onBackerClick">
        </div>
        <form
            id="form_rename"
            @submit="onSubmitRename"
            @mousedown="onBlocker"
            :class="{
                'popup rename to-c ta-s': true,
                'd-n': !btnRenameClicked
            }">
            <p class="pb-15">from: <span class="from-name">{{selectedName}}</span></p>
            <Label name="rename" text="to:" class="pr-5"/>
            <Input
                id="input_rename"
                :login="!invalidName || null"
                :invalid="invalidName || null"
                :value="newName" @input="evt => newName = evt.target.value" />
            <Button
                class="xs-12 mt-15 flex jc-c ai-c"
                :disabled="btnFormRenameClicked">
                {{ btnFormRenameClicked ? 'Renaming' : 'Rename'}}
                <svg v-if="btnFormRenameClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </form>
        <form
            @submit="formDeleteSubmit"
            @mousedown="onBlocker"
            :class="{
                'popup delete to-c ta-c': true,
                'd-n': !btnDeleteClicked
            }">
            <p class="pb-15 delete-title">Confirmation!</p>
            <p class="pb-15">Are you sure to delete this file or dir?</p>
            <Button
                id="btn_form_delete"
                class="xs-12 flex jc-c ai-c"
                background="cb3d3dfc"
                :disabled="btnFormDeleteClicked">
                {{ btnFormDeleteClicked ? 'Deleting' : 'Yes' }}
                <svg v-if="btnFormDeleteClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </form>
        <form
            @submit="formUploadSubmit"
            @mousedown="onBlocker"
            :class="{
                'popup upload to-c ta-c': true,
                'd-n': !fileInputted
            }">
            <p class="pb-15 upload-title">Upload Info</p>
            <p class="pb-15">You are going to upload {{filesArray.length}} files.</p>
            <Button
                id="btn_form_upload"
                class="xs-12 flex jc-c ai-c"
                :disabled="btnFormUploadClicked">
                {{ btnFormUploadClicked ? 'Uploading' : 'Upload' }}
                <svg v-if="btnFormUploadClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </form>
        <form
            id="form_create_folder"
            @submit="onSubmitCreateFolder"
            @mousedown="onBlocker"
            :class="{
                'popup create-folder to-c ta-s': true,
                'd-n': !btnCreateFolderClicked
            }">
            <Label name="create" text="New folder's name" />
            <Input
                id="input_folder_name"
                class="d-b mt-10"
                :login="!invalidFolderName || null"
                :invalid="invalidFolderName || null"
                :value="folderName" @input="evt => folderName = evt.target.value" />
            <Button
                class="xs-12 mt-15 flex jc-c ai-c"
                :disabled="btnFormCreateFolderClicked">
                {{ btnFormCreateFolderClicked ? 'Creating' : 'Create'}}
                <svg v-if="btnFormCreateFolderClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </form>
        <div
            @mousedown="onBlocker"
            :class="{
                'popup upload to-c ta-c': true,
                'd-n': !btnMoveClicked
            }">
            <p class="pb-15 upload-title">Moving</p>
            <p class="pb-15">We are moving your cut files here.</p>
            <svg class="svg-icon move-process" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        </div>
        <div
            @mousedown="onBlocker"
            :class="{
                'popup upload to-c ta-c': true,
                'd-n': !btnCopyClicked
            }">
            <p class="pb-15 upload-title">Copying</p>
            <p class="pb-15">We are copying your copied files here.</p>
            <svg class="svg-icon copy-process" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        </div>
    </div>
    <div
        v-else
        class="
            not-login
            title-welcome
            xs-fs-18
            sm-fs-20
            md-fs-24
        ">
        <p class="simple">You did not login yet.</p>
        <p class="simple">Please login again. <span class="im" @click="onLoginTextClicked">Login</span>.</p>
    </div>  
</template>
<script>
import Input from "../Items/Input.vue";
import File from "./File.vue";
import Label from "../Items/Label.vue";
import Button from "../Items/Button.vue";
import KeyBoard from "../../models/KeyBoard";
import { checkCookie, getCookie } from "../../helpers/cookie";
import FileObject from "../../models/FileObject";
import { regFile } from "../../constants/reg";
import { base } from "../../constants/url";
import { homeUrl } from "../../helpers/url";
import { delete_, get, postFile, put, post } from "../../helpers/fetch_php";
import { fileListToArray } from "../../helpers/converter";
import { AddDocToFiles, fileName } from "../../helpers/fileJob";
import { range } from "../../helpers/array";
import { addSub } from "../../helpers/string";

export default {
    components: {
        Input,
        File,
        Label,
        Button
    },
    data: function() {
        let folder = this.$route.params.folder;
        if (folder) {
            folder = folder.join("/");
        } else {
            folder = "";
        }
        return {
            folder,
            id: 0,
            startIndex: null,
            currentIndex: null,
            fileAmount: 0,
            files: [],
            moves: [],
            copies: [],
            filesArray: [],
            selectedIndexes: [],
            newName: "",
            folderName: "",
            selectedName: "",
            oldSelectedIndex: null,
            invalidName: false,
            invalidFolderName: false,
            processing: true,
            processLeft: false,
            processRight: false,
            hasCredential: false,
            showOptions: false,
            fileInputted: false,
            btnRenameClicked: false,
            btnDeleteClicked: false,
            btnCreateFolderClicked: false,
            btnMoveClicked: false,
            btnCopyClicked: false,
            btnFormRenameClicked: false,
            btnFormDeleteClicked: false,
            btnFormUploadClicked: false,
            btnFormCreateFolderClicked: false
        }
    },
    methods: {
        hasPopup() {
            return this.btnCreateFolderClicked ||
                this.btnRenameClicked ||
                this.btnDeleteClicked ||
                this.fileInputted ||
                this.btnMoveClicked ||
                this.btnCopyClicked;
        },
        formProcessing() {
            return this.btnFormCreateFolderClicked ||
                this.btnFormRenameClicked ||
                this.btnFormDeleteClicked ||
                this.btnFormUploadClicked ||
                this.btnMoveClicked ||
                this.btnCopyClicked;
        },
        setPoints() {
            this.startIndex = null;
            this.currentIndex = null;
        },
        focusInput(id) {
            if (document.activeElement.id !== id) {
                const input = document.getElementById(id);
                const value = input.value;
                let index;
                if (value.indexOf(".") > -1) {
                    index = value.indexOf(".");
                } else {
                    index = value.length;
                }
                input.focus();
                input.setSelectionRange(0, index);
            }
        },
        focusElement(id) {
            if (document.activeElement.id !== id) {
                const element = document.getElementById(id);
                element.focus();
            }
        },
        onBlocker(evt) {
            evt.stopPropagation();
        },
        onBack() {
            if (this.folder !== '') {
                this.processLeft = true;
                if (this.$route.params.folder) this.$router.back();
            }
        },
        async onBtnMoveClick(evt) {
            this.onBlocker(evt);
            this.btnMoveClicked = true;
            for (const doc of this.moves) {
                const endPoint = base + `/users/files/move/${this.id}/${doc.name}`;
                if (this.files.find(f => f.name === fileName(doc.name))) {
                    let name;
                    if (this.folder) {
                        name = `${this.folder}/${fileName(doc.name)}`;
                    } else {
                        name = `${fileName(doc.name)}`;
                    }
                    if (name === doc.name) continue;
                    else doc.name = addSub(doc.name, " - moved");
                }
                const lastName = fileName(doc.name);
                let newPath;
                if (this.folder) {
                    newPath = `${this.id}/${this.folder}/${lastName}`;
                } else {
                    newPath = `${this.id}/${lastName}`;
                }
                await put(endPoint, { newPath });
                AddDocToFiles(
                    this.files,
                    new FileObject(lastName, doc.isFile)
                );
            }
            this.moves = [];
            this.btnMoveClicked = false;
        },
        async onBtnCopyClick(evt) {
            let lastName;
            this.onBlocker(evt);
            this.btnCopyClicked = true;
            for (const doc of this.copies) {
                let endPoint;
                if (doc.isFile) {
                    endPoint = base + `/users/files/copy/${this.id}/${doc.name}`;
                } else {
                    endPoint = base + `/folder/copy/${this.id}/${doc.name}`;
                }
                const newDocName = this.files.find(
                    f => f.name === fileName(doc.name)
                ) ? addSub(doc.name, " - copied") : doc.name;
                lastName = fileName(newDocName);
                let newPath;
                if (this.folder) {
                    newPath = `${this.id}/${this.folder}/${lastName}`;
                } else {
                    newPath = `${this.id}/${lastName}`;
                }
                await put(endPoint, { newPath });
                AddDocToFiles(
                    this.files,
                    new FileObject(lastName, doc.isFile)
                );
            }
            this.copies = [];
            this.btnCopyClicked = false;
        },
        onBtnOptionClicked(evt) {
            this.onBlocker(evt);
            this.showOptions = true;
        },
        onBtnOptionBlur(evt) {
            this.showOptions = false;
        },
        onBtnOptionOpenClicked() {
            const item = this.files[this.oldSelectedIndex];
            if (item.isFile) {
                const name = this.files[this.oldSelectedIndex].name;
                let endPoint;
                if (this.folder) {
                    endPoint = homeUrl() + `/show/files/${this.id}/${this.folder}/${name}`;
                } else {
                    endPoint = homeUrl() + `/show/files/${this.id}/${name}`;
                }
                window.open(endPoint, "_self");
            } else {
                this.processRight = true;
                let path = this.$route.path;
                if (!path.endsWith("/")) {
                    path += "/";
                }
                this.$router.push({ path: path + item.name });
            }
        },
        onBtnOptionRenameClicked() {
            this.newName = this.files[this.oldSelectedIndex].name;
            this.btnRenameClicked = true;
        },
        onBtnOptionDeleteClicked() {
            this.btnDeleteClicked = true;
        },
        onBtnOptionMoveClicked() {
            this.moves = [];
            this.copies = [];
            for (const index of this.selectedIndexes) {
                let path;
                const doc = this.files[index];
                if (this.folder) {
                    path = `${this.folder}/${doc.name}`;
                } else {
                    path = `${doc.name}`;
                }
                this.moves.push(new FileObject(path, doc.isFile));
            }
        },
        onBtnOptionCopyClicked() {
            this.moves = [];
            this.copies = [];
            for (const index of this.selectedIndexes) {
                let path;
                const doc = this.files[index];
                if (this.folder) {
                    path = `${this.folder}/${doc.name}`;
                } else {
                    path = `${doc.name}`;
                }
                this.copies.push(new FileObject(path, doc.isFile));
            }
        },
        async onBtnOptionDownload() {
            for (let index of this.selectedIndexes) {
                const doc = this.files[index];
                const name = doc.name;
                let endPoint;
                if (doc.isFile) {
                    if (this.folder) {
                        endPoint = base + `/files/download/${this.id}/${this.folder}/${name}`;
                    } else {
                        endPoint = base + `/files/download/${this.id}/${name}`;
                    }
                } else {
                    if (this.folder) {
                        endPoint = base + `/folder/download/${this.id}/${this.folder}/${name}`;
                    } else {
                        endPoint = base + `/folder/download/${this.id}/${name}`;
                    }
                }
                let em = document.createElement("iframe");
                em.style.display = "none";
                em.src = endPoint;
                document.body.appendChild(em);
            }
        },
        onBtnOptionCancel() {
            this.moves = [];
            this.copies = [];
            this.selectedIndexes = [];
            this.setPoints();
        },
        onSearch(evt) {
            evt.preventDefault();
            this.onBlocker(evt);
            alert("onSearch");
        },
        onFileSelect(evt, location) {
            this.onBlocker(evt);
            if (KeyBoard.containsKey(KeyBoard.Control)) {
                if (this.selectedIndexes.includes(location.index)) {
                    const index = this.selectedIndexes.indexOf(location.index);
                    this.selectedIndexes.splice(index, 1);
                } else {
                    this.selectedIndexes.push(location.index);
                    this.startIndex = location.index;
                }
            } else if (KeyBoard.containsKey(KeyBoard.Shift)) {
                if (this.startIndex === null) this.startIndex = location.index;
                if (this.selectedIndexes.length) {
                    if (location.index > this.startIndex) {
                        this.selectedIndexes = range(
                            this.startIndex,
                            location.index + 1
                        );
                    } else {
                        this.selectedIndexes = range(
                            location.index,
                            this.startIndex + 1
                        );
                    }
                } else {
                    this.selectedIndexes = [ location.index ];
                }
            } else {
                this.selectedIndexes = [ location.index ];
                this.startIndex = location.index;
            }
            this.selectedName = location.name;
            this.oldSelectedIndex = location.index;
        },
        onBtnSelectAllClick(evt) {
            this.onBlocker(evt);
            this.selectedIndexes = range(0, this.files.length);
        },
        onBackerClick() {
            if (!(
                this.btnFormRenameClicked ||
                this.btnFormDeleteClicked ||
                this.btnFormUploadClicked ||
                this.btnFormCreateFolderClicked
            )) {
                this.btnRenameClicked = false;
                this.btnDeleteClicked = false;
                this.btnCreateFolderClicked = false;
                this.fileInputted = false;
                this.invalidName = false;
                this.invalidFolderName = false;
                this.filesArray = [];
            }
        },
        async onSubmitRename(evt) {
            evt.preventDefault();
            this.btnFormRenameClicked = true;
            if (this.newName && !this.files.find(f => f.name == this.newName)) {
                if (regFile.test(this.newName.trim())) {
                    const doc = this.files[this.oldSelectedIndex];
                    let endPoint;
                    if (this.folder) {
                        endPoint = base + `/users/files/${this.id}/${this.folder}/${this.selectedName}`;
                    } else {
                        endPoint = base + `/users/files/${this.id}/${this.selectedName}`;
                    }
                    const result = await put(
                        endPoint,
                        { "newName": this.newName }
                    );
                    const text = await result.text();
                    const file = new FileObject(text, doc.isFile);
                    this.files.splice(this.oldSelectedIndex, 1, file);
                    this.btnFormRenameClicked = false;
                    this.onBackerClick();
                } else {
                    this.invalidName = true;
                    this.focusInput("input_rename");
                }
            } else {
                this.invalidName = true;
                this.focusInput("input_rename");
            }
            this.btnFormRenameClicked = false;
        },
        async onSubmitCreateFolder(evt) {
            evt.preventDefault();
            this.btnFormCreateFolderClicked = true;
            if (this.folderName && !this.files.find(f => f.name == this.folderName)) {
                if (regFile.test(this.folderName.trim())) {
                    let endPoint;
                    if (this.folder) {
                        endPoint = base + `/folder/create/${this.id}/${this.folder}/${this.folderName}`;
                    } else {
                        endPoint = base + `/folder/create/${this.id}/${this.folderName}`;
                    }
                    const result = await post(endPoint);
                    if (result.ok) {
                        const name = await result.text();
                        const file = new FileObject(name, false);
                        AddDocToFiles(this.files, file);
                    }
                    this.btnFormCreateFolderClicked = false;
                    this.onBackerClick();
                } else {
                    this.invalidFolderName = true;
                    this.focusInput("input_folder_name");
                }
            } else {
                this.invalidFolderName = true;
                this.focusInput("input_folder_name");
            }
            this.btnFormCreateFolderClicked = false;
        },
        async formDeleteSubmit(evt) {
            evt.preventDefault();
            this.btnFormDeleteClicked = true;
            let counter = 0;
            for (let index of this.selectedIndexes.sort()) {
                let endPoint;
                const doc = this.files[index - counter];
                const name = doc.name;
                if (doc.isFile) {
                    if (this.folder) {
                        endPoint = base + `/users/files/${this.id}/${this.folder}/${name}`;
                    } else {
                        endPoint = base + `/users/files/${this.id}/${name}`;
                    }
                } else {
                    if (this.folder) {
                        endPoint = base + `/folder/delete/${this.id}/${this.folder}/${name}`;
                    } else {
                        endPoint = base + `/folder/delete/${this.id}/${name}`;
                    }
                }
                await delete_(endPoint);
                this.files.splice(index - counter, 1);
                counter ++;
            }
            this.selectedIndexes = [];
            this.btnFormDeleteClicked = false;
            this.setPoints();
            this.onBackerClick()
        },
        async formUploadSubmit(evt) {
            evt.preventDefault();
            let endPoint;
            this.btnFormUploadClicked = true;
            if (this.folder) {
                endPoint = base + `/users/files/${this.id}/${this.folder}`;
            } else {
                endPoint = base + `/users/files/${this.id}`;
            }
            const lastFiles = this.filesArray.filter(
                f1 => !this.files.find(f2 => f2.name === f1.name)
            );
            if (lastFiles.length) {
                const response = await postFile(endPoint, lastFiles);
                const json = await response.json();
                for (const name of json) {
                    AddDocToFiles(this.files, new FileObject(name, true));
                }
            }
            this.btnFormUploadClicked = false;
            this.onBackerClick();
        },
        onLoginTextClicked() {
            this.$router.push({ name: "Login" });
        },
        onBtnAddClicked(evt) {
            this.onBlocker(evt);
            document.getElementById("input_file").click();
        },
        onBtnCreateFolderClicked(evt) {
            this.onBlocker(evt);
            this.folderName = "";
            this.btnCreateFolderClicked = true;
        },
        onFileInput(evt) {
            const fileList = evt.target.files;
            if (fileList.length > 0) {
                this.filesArray = fileListToArray(fileList);
                this.fileInputted = true;
            }
            evt.target.value = "";
        }
    },
    async created() {
        const page = this;
        let joined = "";
        let savedSelectedIndexes = [];

        if (this.id == 0) {
            this.hasCredential = checkCookie("username") && checkCookie("password");
            if (this.hasCredential) {
                const username = getCookie("username");
                const password = getCookie("password");
                const endPoint = base + `/users/${username}/${password}`;
                const result = await get(endPoint);
                this.id = +await result.text();
            }
        }
        if (this.id) {
            let endPoint;
            if (this.folder) {
                endPoint = base + `/users/files/${this.id}/${this.folder}`;
            } else {
                endPoint = base + `/users/files/${this.id}`;
            }
            const result = await get(endPoint);
            this.files = await result.json();
        }
        document.addEventListener("mousedown", function(evt) {
            page.selectedIndexes = [];
            page.setPoints();
        });
        document.addEventListener("keydown", function(evt) {
            if (evt.key === "Escape") {
                evt.preventDefault();
                if (joined !== "e") {
                    joined = "e";
                    if (page.hasPopup()) {
                        if (!page.formProcessing()) {
                            page.onBackerClick();
                        }
                    } else {
                        page.onBtnOptionCancel();
                    }
                }
            } else if (!page.hasPopup()) {
                if (evt.key === KeyBoard.Backspace) {
                    if (page.folder) {
                        page.onBack()
                    }
                } else if (evt.key === KeyBoard.Enter) {
                    if (page.selectedIndexes.length) {
                        page.onBtnOptionOpenClicked();
                    }
                } else if (evt.key === "s" || evt.key === "S") {
                    if (page.selectedIndexes.length) {
                        evt.preventDefault();
                        page.onBtnOptionDownload();
                    }
                } else if (evt.key === "a" || evt.key === "A") {
                    evt.preventDefault();
                    if (
                        KeyBoard.containsControl() &&
                        joined !== "a"
                    ) {
                        joined = "a";
                        if (page.files.length) {
                            page.selectedIndexes = range(0, page.files.length);
                            page.selectedName = page.files[0].name;
                            page.oldSelectedIndex = 0;
                            page.currentIndex = 0;
                        }
                    }
                } else if (evt.key === "c" || evt.key === "C") {
                    if (
                        KeyBoard.containsControl() &&
                        page.selectedIndexes.length &&
                        !(
                            joined === "c" &&
                            savedSelectedIndexes.toString() === page.selectedIndexes.toString()
                        )
                    ) {
                        joined = "c";
                        savedSelectedIndexes = [...page.selectedIndexes];
                        page.onBtnOptionCopyClicked();
                    }
                } else if (evt.key === "x" || evt.key === "X") {
                    if (
                        KeyBoard.containsControl() &&
                        page.selectedIndexes.length &&
                        !(
                            joined === "x" &&
                            savedSelectedIndexes.toString() === page.selectedIndexes.toString()
                        )
                    ) {
                        joined = "x";
                        savedSelectedIndexes = [...page.selectedIndexes];
                        page.onBtnOptionMoveClicked();
                    }
                } else if (evt.key === "v" || evt.key === "V") {
                    if (KeyBoard.containsControl() && joined !== "v") {
                        joined = "v";
                        if (page.copies.length) {
                            page.onBtnCopyClick(evt);
                        } else if (page.moves.length) {
                            page.onBtnMoveClick(evt);
                        }
                    }
                } else if (evt.key === KeyBoard.Delete) {
                    if (joined !== "d" && page.selectedIndexes.length) {
                        joined = "d";
                        page.onBtnOptionDeleteClicked();
                    }
                } else if (evt.key === "r" || evt.key === "R") {
                    if (joined !== "r" && page.selectedIndexes.length) {
                        evt.preventDefault();
                        joined = "r";
                        page.onBtnOptionRenameClicked();
                    }
                } else if (evt.key === KeyBoard.ArrowUp) {
                    if (page.selectedIndexes.length) {
                        const firstIndex = page.selectedIndexes[0];
                        const lastIndex = page.selectedIndexes[page.selectedIndexes.length - 1];
                        if (page.currentIndex > 0) {
                            if (KeyBoard.containsShift()) {
                                if (!page.startIndex) {
                                    page.startIndex = firstIndex;
                                    page.currentIndex = firstIndex;
                                }
                                if (page.startIndex >= page.currentIndex) {
                                    page.currentIndex = firstIndex - 1;
                                    page.selectedIndexes = range(page.currentIndex, page.startIndex + 1);
                                } else {
                                    page.currentIndex = lastIndex - 1;
                                    page.selectedIndexes = range(page.startIndex, page.currentIndex + 1);
                                }
                            } else {
                                if (firstIndex > 0) {
                                    page.selectedIndexes = [ firstIndex - 1 ];
                                    page.currentIndex = firstIndex - 1;
                                } else {
                                    page.selectedIndexes = [ 0 ];
                                    page.currentIndex = 0;
                                }
                                page.startIndex = null;
                            }
                        }
                    } else {
                        if (page.files.length) {
                            page.selectedIndexes = [ 0 ];
                            page.currentIndex = 0;
                            page.startIndex = null;
                        }
                    }
                    page.oldSelectedIndex = page.currentIndex;
                    page.selectedName = page.files[page.currentIndex].name;
                } else if (evt.key === KeyBoard.ArrowDown) {
                    if (page.selectedIndexes.length) {
                        const firstIndex = page.selectedIndexes[0];
                        const lastIndex = page.selectedIndexes[page.selectedIndexes.length - 1];
                        if (page.currentIndex < page.files.length - 1) {
                            if (KeyBoard.containsShift()) {
                                if (!page.startIndex) {
                                    page.startIndex = firstIndex;
                                    page.currentIndex = firstIndex;
                                }
                                if (page.startIndex > page.currentIndex) {
                                    page.currentIndex = firstIndex + 1;
                                    page.selectedIndexes = range(page.currentIndex, page.startIndex + 1);
                                } else {
                                    page.currentIndex = lastIndex + 1;
                                    page.selectedIndexes = range(page.startIndex, page.currentIndex + 1);
                                }
                            } else {
                                if (lastIndex < page.files.length - 1) {
                                    page.selectedIndexes = [ lastIndex + 1 ];
                                    page.currentIndex = lastIndex + 1;
                                } else {
                                    page.selectedIndexes = [ lastIndex ];
                                    page.currentIndex = lastIndex;
                                }
                                page.startIndex = null;
                            }
                        }
                    } else {
                        if (page.files.length) {
                            page.selectedIndexes = [ 0 ];
                            page.currentIndex = 0;
                            page.startIndex = null;
                        }
                    }
                    page.oldSelectedIndex = page.currentIndex;
                    page.selectedName = page.files[page.currentIndex].name;
                }
            }
        });
        document.addEventListener("keyup", function() {
            joined = "";
            savedSelectedIndexes = [];
        });
        this.processing = false;
    },
    updated() {
        if (this.btnCreateFolderClicked && !this.btnFormCreateFolderClicked) {
            setTimeout(() => {
                this.focusInput("input_folder_name");
            }, 0);
        } else if (this.btnRenameClicked && !this.btnFormRenameClicked) {
            setTimeout(() => {
                this.focusInput("input_rename");
            }, 0);
        } else if (this.btnDeleteClicked && !this.btnFormDeleteClicked) {
            setTimeout(() => {
                this.focusElement("btn_form_delete");
            }, 0);
        } else if (this.fileInputted && !this.btnFormUploadClicked) {
            setTimeout(() => {
                this.focusElement("btn_form_upload");
            }, 0);
        }
    },
    watch: {
        async $route(to) {
            this.selectedIndexes = [];
            this.setPoints();
            if (to.fullPath.split("/").length > 1) {
                let folder = this.$route.params.folder;
                if (folder) {
                    this.folder = folder.join("/");
                } else {
                    this.folder = "";
                }
            }
            let endPoint;
            if (this.folder) {
                endPoint = base + `/users/files/${this.id}/${this.folder}`;
            } else {
                endPoint = base + `/users/files/${this.id}`;
            }
            const result = await get(endPoint)
            this.files = await result.json();
            if (this.processRight) this.processRight = false;
            else if (this.processLeft) this.processLeft = false;
        }
    }
}
</script>
<style scoped>
    p {
        font-weight: 500;
    }
    input[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
    }
    /* .span-folder[data-title]:after {
        left: -100%;
    } */
    .shortcut {
        padding-left: 5px;
    }
    .simple {
        font-weight: normal;
    }
    .wrapper {
        line-height: 1.5;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0px 0px 4px 2px rgba(148, 148, 148, 0.288);
        max-width: 91.6666%;
    }
    .input-search {
        max-width: 250px;
        padding: 8px;
    }
    .status {
        padding-top: 30px;
        font-size: 20px;
        font-weight: 400;
        color: #6c7e90;
    }
    .from-name {
        border-bottom: solid 1px;
        line-height: 1.1px;
    }
    .options {
        border: solid 1px rgb(194, 194, 194);
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        left: 100%;
        transform: translate(-100%, 0px);
    }
    .rename, .delete, .upload , .create-folder{
        padding: 15px;
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418);
        border-radius: 5px;
        background-color: #fff;
    }
    .delete-title, .upload-title {
        font-size: 22px;
    }
    .btn-option {
        font-weight: 500;
        padding: 2.5px 10px;
    }
    .btn-option:hover {
        filter: brightness(2);
    }
    .divider {
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: #aaa;
    }
    .title-bar {
        background-color: #ebebeb;
        padding: 10px;
        border: 1px solid rgb(194, 194, 194);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .name {
        font-weight: 500;
        border-bottom: 1px solid rgb(126, 126, 126);
        line-height: 1.1;
        font-size: 17px;
    }
    .more {
        fill: #182533;
        width: 28px;
    }
    .not-login {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title-welcome {
        padding-bottom: 10px;
    }
    .im {
        cursor: default
    }
    .nav-right-wrapper, .nav-left-wrapper {
        width: 100%;
        background-color: #5895ff70;
    }
    .nav-right {
        height: 2px;
        background-color: #5895ff;
        animation: nav-right 2500ms ease-out 0ms infinite normal both;
    }
    .nav-left {
        height: 2px;
        background-color: #5895ff;
        animation: nav-left 2500ms ease-out 0ms infinite normal both;
    }
    .btn-disabled {
        opacity: 0.35;
    }
    .svg-icon {
        padding: 4px;
        margin-left: 1px;
        margin-right: 1px;
    }
    .process-icon {
        width: 18px;
        fill: #fff;
    }
    .process-icon:hover,
    .btn-disabled:hover,
    .icon-disabled:hover,
    .copy-process:hover,
    .move-process:hover {
        filter: brightness(1);
    }
    .process-icon:active,
    .btn-disabled:active,
    .icon-disabled:active,
    .copy-process:active,
    .move-process:active {
        transform: scale(1, 1);
    }
    .process-icon,
    .copy-process,
    .move-process {
        animation: rotate 2000ms linear 0ms infinite normal both;
    }
    .process-icon-big {
        width: 40px;
        fill: #8d8d8d;
        margin-top: 30px;
        animation-duration: 1500ms;
    }
    .copy-process,
    .move-process {
        width: 30px;
        fill: #8d8d8d;
        animation-duration: 1500ms;
    }
</style>