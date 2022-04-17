const id=localStorage.getItem("userId")
export const addSkill = (skills) =>{
    const addedSkill =  fetch("/users/"+id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            skill_ids: skills.map(skill => skill.id)
        }),
      })
      if (addedSkill.status === 201) {
        return [true];
      }
      else
      return [false];
    };
