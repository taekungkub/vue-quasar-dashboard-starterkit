<template>
  <div class="q-pa-lg">
    <h6>CALENDAR</h6>
    <q-card>
      <q-card-section>
        <FullCalendar :options="calendarOptions" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarOptions } from "@fullcalendar/core";
import { createEventId } from "../config/event-utils";

const calendarOptions: CalendarOptions = {
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,

  events: [
    { title: "Meeting", allDay: true, date: "2023-02-09", color: "#34C28F" },
    {
      title: "Hey!",
      allDay: true,
      start: new Date(),
      color: "#F1B34C",
    },

    { title: "Event 1", date: "2023-02-01" },
    { title: "Event 2", date: "2023-02-02" },
  ],
  select: handleDateSelect,
  eventClick: handleEventClick,
};

function handleDateSelect(selectInfo: any) {
  console.log(selectInfo);
  let title = prompt("Please enter a new title for your event");
  let calendarApi = selectInfo.view.calendar;
  calendarApi.unselect(); // clear date selection
  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  }
}

function handleEventClick(clickInfo: any) {
  alert("date click! " + clickInfo.event.title);
}
</script>

<style scoped>
.fc-head {
  color: #111 !important;
}

.fc-event {
  color: #111 !important;
}
</style>
