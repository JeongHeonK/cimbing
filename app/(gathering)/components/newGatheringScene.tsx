import MeetingForm from "./MeetingForm";

export type InitialValue = {
  _id: string;
  title: string;
  description: string;
  lat: string;
  lng: string;
  date: Date | undefined;
};

const initialValue: InitialValue = {
  _id: "",
  title: "",
  description: "",
  lat: "",
  lng: "",
  date: new Date(),
};

export default function NewGatheringPageScene() {
  const gathering = initialValue;

  return (
    <MeetingForm
      _id={gathering?._id.toString()}
      title={gathering?.title}
      description={gathering?.description}
      lat={gathering?.lat}
      lng={gathering?.lng}
      date={gathering?.date}
    />
  );
}
