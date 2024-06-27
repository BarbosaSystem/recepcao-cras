<template>
  <div class="modal fade" id="modalOption" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="modalOptionLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" style="justify-content: center">
        <form class="needs-validation" novalidate="" @submit.prevent="$emit('iniciar')" autocomplete="off">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h1 class="modal-title fs-5" id="modalOptionLabel">
                Escolha uma opção
              </h1>
              <button
                type="button"
                class="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close" style="color: white !important;"
              ></button>
            </div>
            <div class="modal-body">
              <button @click="$emit('atender', 'atender')" class="btn btn-success m-1 w-100"><i class="fa-solid fa-circle-check"></i> Atender</button>
              <button @click="$emit('atender', 'editar')" class="btn btn-warning m-1 w-100"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
              <button @click="$emit('atender', 'excluir')" class="btn btn-danger m-1 w-100"><i class="fa-solid fa-circle-xmark"></i> Excluir</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>