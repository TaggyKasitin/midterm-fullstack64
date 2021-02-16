import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>This is blog #{id}</p>
    </div>
  );
};
