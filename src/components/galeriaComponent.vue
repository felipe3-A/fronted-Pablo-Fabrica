<template>
   <main>
 
<button type="button" class="btn-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
touch me
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<img src="../assets/img.jpg"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
   </main>
</template>
<script>
export default{
   
}
</script>

<style scoped>
img{
    width: 60%;
}
.btn-1{
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 10%;

}
.btn-1:hover{
  background-color: blue;
  color: rgb(255, 255, 255);
  font-weight: bolder;
}
</style>