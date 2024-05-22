<template>
    <div class="form-group" style=" height: 100%; display: flex; flex-direction: column; justify-content: flex-end;">
        <label :for="item.id" class="form-label mt-1">{{ item.label }}</label>
        
        <select v-model="item.value" class="form-control form-select" :disabled="item.disabled" :id="item.id"
            v-if="item.type == 'select'">
            <option :value="option.nome" v-for="(option, index) in options_list" :key="index">
                {{ option.nome }}
            </option>
        </select>
    
        <div class="form-check" v-else-if="false">
            <input class="form-check-input" type="checkbox" v-model="item.value" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
            {{item.text}}
            </label>
        </div>
    
        <div class="form-check form-switch" v-else-if="item.type === 'Boolean'">
        <input style="height: 20px; width: 4rem !important;" class="form-check-input" @change="$emit('toggle')" v-model="item.value" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked">{{item.text}}</label>
    </div>

        <textarea :rows="item.rows" v-else-if="item.type === 'textarea'" v-model="item.value" class="form-control"
            :id="item.id" :disabled="item.disabled" :placeholder="item.placeholder"></textarea>

        <input @keypress="isNumber($event)" v-else-if="item.type === 'number'" type="number" v-model="item.value"
            class="form-control" :disabled="item.disabled" min=0 :id="item.id" :placeholder="item.placeholder" required />
        

        <input v-else-if="item.type === 'password'" type="password" minlength="8" v-model="item.value" class="form-control"
            :disabled="item.disabled" :id="item.id" required :placeholder="item.placeholder" />

        <input v-else-if="item.type === 'email'" type="text" v-model="item.value" class="form-control"
            :disabled="item.disabled" :id="item.id" required :placeholder="item.placeholder" />

        <input
            v-else-if="item.type === 'date'"
            type="date"
            :value="new Date(item.value).toISOString().substr(0, 10)"
            class="form-control"
            :disabled="item.disabled"
            :id="item.id"
            />

        <p class="form-control" v-else-if="item.type === 'date_read'" :disabled="item.disabled">{{ item.value |
        DateConverter }}</p>

        <input v-else-if="item.type === 'phone'" onkeypress="mask(this, mphone);" onblur="mask(this, mphone);" type="text" v-model="item.value" class="form-control" required
            :disabled="item.disabled" :id="item.id" :placeholder="item.placeholder" />
            
        <input v-else-if="item.type === 'currency'" type="decimal" required
        v-model="item.value" class="form-control"
        :disabled="item.disabled" :id="item.id" :placeholder="item.placeholder" />

        <input :type="item.type" required  v-model="item.value" class="form-control" :disabled="item.disabled" :id="item.id"
        :placeholder="item.placeholder" v-else />

        <div class="form-text" v-if="item.id == 'phone' || item.id == 'email'">{{item.Message}}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        item: Object,
        options_list: Array,
        required: Boolean,
    },
    filters: {
        DateConverter(id_item) {
            const date = new Date(id_item)
            const day = date.getDate().toString().padStart(2, '0')
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            const year = date.getFullYear()
            const formatted = `${day}/${month}/${year}`
            return formatted
        }
    },
    methods: {
        desabilitar(item) {
        item.disabled = !item.disabled;
        /* @dblclick="desabilitar(item)" */
        },
        isNumber(evt) {
        const charCode = evt.which ? evt.which : evt.keyCode;
        if (
            charCode > 31 &&
            (charCode < 48 || charCode > 57) &&
            charCode !== 46
        ) {
            evt.preventDefault();
        }
        },
        dateToYYYYMMDD(d) {
        console.log(d && new Date(d.getTime()).toISOString().split("T")[0]);
        return d && new Date(d.getTime()).toISOString().split("T")[0];
        },
    },
  };
  </script>