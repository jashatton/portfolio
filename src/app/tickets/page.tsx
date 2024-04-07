import Poster from "@/app/tickets/Poster";
import Search from "@/app/tickets/Search";
import SearchResults from "@/app/tickets/SearchResults";

export default function TicketPages() {
  return (
    <div className="flex flex-col md:flex-row text-white w-full h-full">
      <Poster
        posterClassname="w-screen h-auto md:h-screen md:w-auto max-h-[390px] md:max-h-none md:max-w-[390px] lg:max-w-[580px] md:object-left"
        posterSrc="/tickets/battle-over-fiera.png"
      />
      <div className="w-full">
        <Search/>
        <SearchResults/>
      </div>
    </div>
  )
}
