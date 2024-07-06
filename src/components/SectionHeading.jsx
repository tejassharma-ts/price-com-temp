export default function SectionHeading({ title, subTitle }) {
  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <span className="block h-8 w-4 rounded-sm bg-[#017F7F]" />
        <h2 className="text-lg font-medium text-[#017F7F] capitalize">{title}</h2>
      </div>
      <h1 className="text-2xl font-semibold capitalize">{subTitle}</h1>
    </div>
  );
}
