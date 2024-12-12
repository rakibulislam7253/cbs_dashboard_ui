<template>
    <div class="card flex justify-content-center">
        {{ modalData.id }}
        <Dialog
            v-model:visible="visible"
            header="Edit Profile"
            :style="{ width: '50rem' }"
            :pt="{
                root: 'border-none',
                mask: {
                    style: 'backdrop-filter: blur(2px)'
                }
            }"
        >
            <span class="p-text-secondary block mb-5">Update your information.</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="Name" class="font-semibold w-6rem">Name</label>
                <InputText v-model="modalData.id" id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="country" class="font-semibold w-6rem">Country</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
        <Button type="button" label="Cancel" severity="secondary" @click="childData('childToParent data')">Child to Parent</Button>
    </div>
</template>
<script>
// import testing from '../uikit/Testing.vue';
// import { ref } from 'vue';
// const childToParent = ref(0);
export default {
    // components: { testing },
    data() {
        return {
            visible: false,
            modalData: ''
        };
    },
    methods: {
        childData(PermissionData) {
            this.$emit('reload', { mydata: 'item.id' });
            console.log('selection data: ', PermissionData);
            // this.$refs.PermissionData.childToParent(PermissionData);
        },
        updatePermission(data) {
            this.modalData = data;
            if (this.modalData) {
                this.visible = true;
            }
            console.log('child data', this.modalData);
        }
    }
};
</script>
