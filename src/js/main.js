var allTasks;
var allList = document.querySelector('ol')
function saveLocal () {
  allTasks = allList.innerHTML
  localStorage.setItem('allTasks', allTasks)
}

jQuery('#enter-task').on('submit', function (event) {
  event.preventDefault()
  let task = jQuery('#todo').val()
  jQuery('#todo').val('')
  if (task.length > 0) {
    jQuery('#list').append('<li class="list-item"><input type="checkbox" name="done" value="done" class="done" title="Done"><a href="#" class="button del-btn">Del</a><a href="#" class="button edit-btn">Edit</a><span>'+task+'</span></li>')
    saveLocal()
  }
  return
})

jQuery('#list').on('click', '.del-btn', function (event) {
  event.preventDefault()
  jQuery('.del-selected').removeClass('del-selected')
  jQuery(this).closest('.list-item').addClass('del-selected')
  jQuery('.del-selected').remove()
  saveLocal()
})

jQuery('#list').on('click', '.edit-btn', function (event) {
  event.preventDefault()
  jQuery('.edit-selected').removeClass('edit-selected')
  jQuery(this).closest('.list-item').addClass('edit-selected')
  let editTask = jQuery('.edit-selected > span').text()
  jQuery('.edit-selected').html('<a href="#" class="button del-btn">Del</a><a href="#" class="button upd-btn">Update</a><input type="text" class="enter-field" name="edit-todo" autofocus value='+editTask+'></>')
  jQuery('.edit-selected').removeClass('edit-selected')
  saveLocal()
})

jQuery('#list').on('click', '.upd-btn', function (event) {
  event.preventDefault()
  jQuery('.update-selected').removeClass('update-selected')
  jQuery(this).closest('.list-item').addClass('update-selected')
  let edited = jQuery('.update-selected > input[type=text][name=edit-todo]').val()
  jQuery('.update-selected').html('<input type="checkbox" name="done" value="done" class="done" title="Done"><a href="#" class="button del-btn">Del</a><a href="#" class="button edit-btn">Edit</a><span>'+edited+'</span>')
  saveLocal()
})

  jQuery('#list').on('click', 'input[type=checkbox][name=done]', function (event) {
  jQuery(this).closest('.list-item').addClass('done-selected')
  let done = jQuery('.done-selected > span').text()
  jQuery('.done-selected').remove()
  jQuery('#done-list').append('<li class="done-list-item"></a><span>'+done+'</span></li>')
  saveLocal()
})

if (localStorage.getItem('allTasks')) {
  allList.innerHTML = localStorage.getItem('allTasks')
}
