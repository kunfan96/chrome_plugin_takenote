/*
    运行主程序
*/
Vue.createApp({
    data () {
        return {
            title: 'Write Your TodoList',

            noteList: [],

            // show delete button
            deleteStatus: true
        }
    },
    methods: {
        addList () {
            this.noteList.unshift({ text: 'Write You Plan' })

            this.storeData()
        },

        searchIndex (index) {
            this.locateIndex = index

            this.toggleDeleteButton()
        },

        toggleDeleteButton () {
            if (this.tmToggleDeleteButton) {
                clearTimeout(this.tmToggleDeleteButton)
                this.tmToggleDeleteButton = null
                return
            }

            this.tmToggleDeleteButton = setTimeout(() => {
                this.deleteStatus = !this.deleteStatus
                this.tmToggleDeleteButton = null
            }, 300)
        },

        modifyContent (e) {
            const {target} = e

            this.toggleDeleteButton()

            const content = filterXSS(target.innerText, {
                whiteList: [],
                stripIgnoreTag: true,
                stripIgnoreTagBody: ["script"],
                css: false
            })

            this.noteList[this.locateIndex] = { text: content }

            target.innerText = content

            this.storeData()
        },

        deleteItem (index) {
            this.noteList = this.noteList.filter((item, i) => index !== i)
            this.storeData()
        },

        storeData () {
            window.localStorage.setItem('chrome_plugin_todolist', JSON.stringify(this.noteList))
        },

        restoreData () {
            const data = window.localStorage.getItem('chrome_plugin_todolist')

            if (data) {
                this.noteList = JSON.parse(data)
            }
        }
    },

    mounted () {
        this.restoreData()
    }
}).mount('#container')