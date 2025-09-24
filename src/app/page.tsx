import { EventList } from "@/components/EventList";

export default function Page() {
    return (
        <main id="main-content" role="main" className="container mx-auto mt-4 mb-5 px-4 md:mt-16 md:px-0">
            <EventList />
        </main>
    );
}
