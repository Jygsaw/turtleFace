

var Hacker = Backbone.Model.extend({
  defaults: function() {
    return {
      name: 'George Clooney',
      image: 'http://www.nndb.com/people/763/000022697/george-clooney.jpg'
    };
  },
  initialize: function() {
  }
});

var Cohort = Backbone.Collection.extend({
  model: Hacker,
  initialize: function() {
    console.log("madness");
  }
});

var HackerView = Backbone.View.extend({
  tagName: 'div',
  initialize: function() {
    this.render();
  },
  render: function(){
    return this.$el.html('<p>Hey Im here</p>');
  }
});

var CohortDisplayView = Backbone.View.extend({
  tagName: 'div',
  initialize: function(){
    this.render();
  },
  render: function(){
    return this.$el.html('<p>Hey Im Cohort View</p>');
  }
});

var CohortNavView = Backbone.View.extend({
  tagName: 'div',
  initialize: function(){
    this.render();
  },
  render: function(){
   return this.$el.html('<p>Hey Im Cohort NavView</p>');
  }
});

console.log("===== MAIN BODY =====");
var hacker = new Hacker({
  name: 'testName',
  image: 'testImg',
});
var cohort = new Cohort(hacker);
var cohortView = new CohortDisplayView(cohort);
var cohortNavView = new CohortNavView(cohort);
$(function(){
  $('body').append(cohortView.$el);
  $('body').append(cohortNavView.$el);
});
