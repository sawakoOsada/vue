var app = new Vue({
  el: '#app',
  data: {
    name: '',
    course: '',
    period: '',
    defaultLastId: 0,
    students: [
    ]
  },
  methods: {
    addStudent: function() {
      this.students.push({
        id: this.defaultLastId += 1,
        name: this.name,
        course: this.course,
        period: this.period,
      })
      this.name = ''
      this.course = ''
      this.period = ''
    }
  }
})
