<script>
export default {
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage >= this.totalPages;
    }
  },
  props: {
    disableButton: {
      type: Boolean,
      requeired: false
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },

    /* total: {
      type: Number,
      required: true
    }, */
    /* perPage: {
      type: Number,
      required: true
    }, */
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
}
</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination" style="justify-content: flex-end; margin-bottom: 0">
      <li class="pagination-item">
        <button type="button" class="btn btn-default" :class="[isInFirstPage ? 'disabled' : '']"
          @click="onClickPreviousPage" :disabled="isInFirstPage || disableButton" aria-label="Go to previous page">
          Anterior
        </button>
      </li>
       <!--<li class="page-item" v-for="page in pages" class="pagination-item" v-if="page.name > 0">
        <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled" class="page-link"
          :class="{ active: isPageActive(page.name) }">
          {{ page.name }}
        </button>
      </li> -->
      <li class="pagination-item">
        <button type="button" class="btn btn-default" :class="[isInLastPage ? 'disabled' : '']" @click="onClickNextPage"
          :disabled="isInLastPage || disableButton" aria-label="Go to next page">
          Próximo
        </button>
      </li>
    </ul>
  </nav>
</template>