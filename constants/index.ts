export const DAYS_OF_WEEK_IN_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const PrivateNavLinks = [
  {
    imgURL: "/assets/events.jpeg",
    route: "/events",
    label: "My Events",
  },
  {
    imgURL: "/assets/schedule.jpeg",
    route: "/schedule",
    label: "My Schedule",
  },
  {
    imgURL: "/assets/public.jpeg",
    route: "/book",
    label: "Public Profile",
  },
] as const;
