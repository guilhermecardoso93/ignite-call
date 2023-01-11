import { CalendarActions, CalendarContainer, CalendarHeader, CalendarTitle } from "./styles";

export function Calendar() {
  return (
    <CalendarContainer>
        <CalendarTitle>
          Dezembro <span>2022</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CarretLeft />
          </button>
          <button>
            <CarretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
    </CalendarContainer>
  )
}