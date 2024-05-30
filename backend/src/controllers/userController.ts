import { Request, Response, response } from "express";
import { getAllUsers, getUser, getUserDetailsByUsername, saveUserModel, updateUserData } from "../model/user";
import { error } from "console";
import { UserDataType } from "../utiles/type";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const saveUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await saveUserModel(req);
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      response: error,
    });
  }
};

export const userOnboarding = async (req: Request, res: Response) => {
  const { userData } = req.body;
  try {
    const updatedUser = await updateUserData(userData);
    res.status(200).json({
      message: "User onboarded successfully",
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.error("Error during user onboarding:", error);

    // Send error response
    res.status(500).json({
      error: "Internal server error",
      response: error,
    });
  }
};

export const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(404).json({
        error: "Invalid username type"
      })
    }
    const result = await getUserDetailsByUsername(username as string);
    if (!result) {
      return res.status(404).json({
        error: "User not found"
      })
    }
    const userData: UserDataType = {
      userId: result.id.toString(),
      profileData: {
        name: result.name,
        profileImg: result.img || "",
        bgImg: result.bgImg || "",
        bio: result.bio || "",
        location: `${result.city}, ${result.country}`,
      },
      aboutData: {
        about: result.desc || ""
      },
      workExperienceData: {
        company: result.experience.map((experience) => {
          const company = {
            companyName: experience.companyName,
            companyLogo: experience.companyLogo || "",
            role: experience.role,
            desc: experience.desc,
            startYear: experience.startYear,
            endYear: experience.endYear
          }
          return company;
        })
      }
    }
    return res.json(userData)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}