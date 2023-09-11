import { useForm, SubmitHandler } from "react-hook-form";
import styles from '../../../styles/bannerForm.module.css'

interface IFormInput {
  what: string;
  where: string;
}

const BannerForm = () => {
  // const [counter, setCounter] = useState(1);
  // const [academicSkills, setAcademicSkills] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  // console.log(watch("example"));

  return (
    <form
      className="bg-[#081351] text-white rounded-[10px] px-[15px] py-8 max-w-5xl w-ful mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center items-center gap-6">
        <div>
          <label className={`${styles.label}`}>What (required)</label> <br />
          <input
            type="text"
            className={`${styles.inputs} w-full`}
            defaultValue=""
            {...register("what", { required: true })}
          />
          {/* {errors.what && <span>What is required</span>} */}
        </div>
        <div>
          <label className={`${styles.label}`}>Where (required)</label> <br />
          <input
            type="text"
            className={`${styles.inputs} w-full`}
            defaultValue=""
            {...register("where", { required: true })}
          />
          {/* {errors.where && <span>Where is required</span>} */}
        </div>
        <div>
          <input
            className={`${styles.submit} md:mt-8 mt-4 mb-10 md:mb-0`}
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default BannerForm;
