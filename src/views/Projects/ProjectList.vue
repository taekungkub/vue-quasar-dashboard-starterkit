<template>
  <div class="q-pa-lg">
    <h6>PROJECT LIST</h6>

    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table project-list-table table-nowrap table-centered table-borderless align-middle">
            <thead>
              <tr>
                <th scope="col" style="width: 100px">#</th>
                <th scope="col" class="text-left" style="min-width: 250px">Projects</th>
                <th scope="col" class="text-left" style="min-width: 100px">Due Date</th>
                <th scope="col" class="text-left">Status</th>
                <th scope="col" class="text-left">Team</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in projectList" :key="item.id">
                <td><q-avatar size="50px" font-size="23px" color="grey-2" text-color="primary" :icon="item.icon" /></td>
                <td>
                  <div class="text-h6">
                    {{ item.title }}
                  </div>
                  <div cclass="text-muted text-body2 ">
                    {{ item.subtitle }}
                  </div>
                </td>
                <td>{{ item.date }}</td>
                <td>
                  <q-badge :color="item.color">{{ item.status }}</q-badge>
                </td>
                <td>
                  <AvatarGroup />
                </td>
                <td>
                  <div class="row justify-center">
                    <q-btn size="sm" round flat color="primary" icon="fa-solid fa-ellipsis-vertical">
                      <q-menu auto-close>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>View</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Edit</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Delete</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarGroup from "@/components/AvatarGroup.vue";
import projectList from "@/config/projectList";
</script>

<style lang="scss" scoped>
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  thead {
    background-color: #fff;
  }
  thead th:first-child {
    border-radius: 12px 0 0 12px;
  }
  thead th:last-child {
    border-radius: 0 12px 12px 0;
  }
  tbody tr td {
    background-color: #fff;
  }
  tbody tr td:first-child {
    border-radius: 12px 0 0 12px;
  }

  tbody tr td:last-child {
    border-radius: 0 12px 12px 0;
  }
}

.project-list-table {
  border-collapse: separate;
  border-spacing: 0 12px;
}
.align-middle {
  vertical-align: middle !important;
}

.table-nowrap th {
  white-space: nowrap;
}
.table th {
  font-weight: 600;
}
.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table > :not(caption) > * > * {
  padding: 0.75rem 0.75rem;
  background-color: transparent;
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px transparent;
}
</style>
