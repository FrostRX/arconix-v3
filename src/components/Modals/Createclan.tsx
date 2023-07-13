/* eslint-disable @next/next/no-img-element */
import React from "react";
import Modal from "./Modal";
import useClanModal from "@/hooks/useClanModal";
import { Clan, User } from "@/common.types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsFillImageFill } from "react-icons/bs";
import { API_URI } from "@/Utils/variables";

export default function Createclan({
  user,
  clan,
}: {
  user: User;
  clan: Clan[];
}) {
  const clanModal = useClanModal();
  const [clanImage, setClanImage] = React.useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    clanModal.onClose();
    // Upload image
    let formData: string | null = null;
    if (clanImage) {
      const formData = new FormData();
      formData.append("file", clanImage);
      formData.append("upload_preset", "clan");
    }

    const newData = {
      name: data.clanName,
      tag: data.clanTag,
      desc: data.clanDescription,
      image: formData,
      owner: user.id,
      lang: data.clanLanguage,
      members: [`${user.id}`],
      status: data.clanType === "private" ? true : false,
      verified: false,
      max: 32,
      application: [],
      cost: totalCost,
    };

    await fetch("/api/actions/clans", {
      method: "POST",
      body: JSON.stringify({
        action: "create",
        data: newData,
      }),
    });
  };

  const bodyContent = (
    <div>
      <div className="w-full pb-10 flex items-center justify-center">
        <div>
          <input
            type="file"
            name="clanimage"
            id="clanimage"
            className="hidden"
            onChange={(e) => {
              setClanImage(e.target.files![0]);
              console.log(`clanImage`, URL.createObjectURL(e.target.files![0]));
            }}
            accept="image/png, image/jpeg, image/jpg, image/webp"
          />
          <label
            htmlFor="clanimage"
            className="flex items-center justify-center w-24 h-24 bg-tertiary rounded-full cursor-pointer"
          >
            {(clanImage && clanImage.type === "image/png") ||
            clanImage?.type === "image/jpeg" ||
            clanImage?.type === "image/jpg" ||
            clanImage?.type === "image/webp" ? (
              <img
                src={URL.createObjectURL(clanImage)}
                alt="clanimage"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <BsFillImageFill className="text-white text-opacity-60 text-6xl" />
            )}
          </label>
        </div>
      </div>
      <div>
        <div className="flex gap-2 w-full">
          <div className="w-[95%]">
            <label className="block text-sm font-medium text-white text-opacity-60">
              Clan Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="py-2 px-3 outline-none rounded-md w-full bg-tertiary text-white text-opacity-60"
                defaultValue={`${user.display}'s Clan`}
                {...register("clanName", {
                  required: true,
                  validate: {
                    isUnique: (value) => {
                      if (clan.find((c) => c.name === value)) {
                        return "Clan name already exists";
                      }
                    },
                    maxLength: (value) => {
                      if (value.length > 20) {
                        return "Clan name is too long";
                      }
                    },
                    minLength: (value) => {
                      if (value.length < 3) {
                        return "Clan name is too short";
                      }
                    },
                  },
                })}
              />
              {errors.clanName && (
                <span className="text-red-500">
                  {errors.clanName.message?.toString() ||
                    "This field is required"}
                </span>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white text-opacity-60">
              Clan Tag
            </label>
            <div className="mt-1">
              <div className="flex items-center justify-center gap-2 bg-tertiary py-2 px-3 rounded-md">
                <span className="text-white text-opacity-60">[</span>
                <input
                  type="text"
                  {...register("clanTag", {
                    required: true,
                    minLength: 3,
                    maxLength: 4,
                    validate: {
                      isUnique: (value) => {
                        if (clan.find((c) => c.tag === value)) {
                          return "Clan tag already exists";
                        }
                      },
                    },
                  })}
                  className="outline-none w-full bg-transparent text-white text-opacity-60"
                />
                <span className="text-white text-opacity-60">]</span>
              </div>
              {errors.clanTag && (
                <span className="text-red-500">
                  {errors.clanTag.message?.toString() ||
                    "This field is required"}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-white text-opacity-60">
            Clan Description
          </label>
          <div className="mt-1 relative">
            <textarea
              className="py-2 px-3 outline-none rounded-md w-full bg-tertiary text-white text-opacity-60 resize-none h-32"
              {...register("clanDescription", {
                required: false,
                validate: {
                  maxLength: (value) => {
                    if (value.length > 150) {
                      return "Description is too long";
                    }
                  },
                },
              })}
            />
            <div className="absolute -bottom-5 right-2 text-white text-opacity-60 select-none">
              <span className="text-sm">
                {watch("clanDescription")?.length || 0}/150
              </span>
            </div>
            {errors.clanDescription && (
              <span className="text-red-500">
                {errors.clanDescription.message?.toString() ||
                  "This field is required"}
              </span>
            )}
          </div>
        </div>

        {/* Clan Settings */}
        <div className="mt-4">
          <div className="mt-1 flex gap-5">
            <div className="w-full">
              <label className="block text-sm font-medium text-white text-opacity-60">
                CLAN SETTINGS
              </label>
              <select
                className="py-2 px-3 outline-none rounded-md w-full bg-tertiary text-white text-opacity-60"
                {...register("clanType", {
                  required: true,
                })}
              >
                <option value="public">Anyone can join</option>
                <option value="private">Invite only</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-white text-opacity-60">
                CLAN MAIN LANGUAGE
              </label>
              <select
                className="py-2 px-3 outline-none rounded-md w-full bg-tertiary text-white text-opacity-60"
                {...register("clanLanguage", {
                  required: true,
                })}
                defaultValue={"us"}
              >
                <option value="us">English (Default)</option>
                <optgroup label="---------">
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="it">Italian</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="tr">Turkish</option>
                  <option value="pl">Polish</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  let totalCost = 0;

  const offerts = {
    premium: 1000,
    normal: 1500,
  };

  const costs = {
    private: 150,
    public: 0,
  };

  if (user.role === "premium") {
    totalCost += offerts.premium;
  } else {
    totalCost += offerts.normal;
  }

  if (watch("clanType") === "private") {
    totalCost += costs.private;
  } else {
    totalCost += costs.public;
  }

  return (
    <Modal
      title="Select your country"
      actionLabel={`Create (${totalCost} coins)`}
      disabled={totalCost > user.coins}
      body={bodyContent}
      onClose={() => {
        clanModal.onClose();
        setClanImage(null);
      }}
      isOpen={clanModal.isOpen}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel="Cancel"
      secondaryAction={() => {
        clanModal.onClose();
        setClanImage(null);
      }}
    />
  );
}
