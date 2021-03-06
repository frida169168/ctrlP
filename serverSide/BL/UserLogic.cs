﻿using System;
using System.Collections.Generic;
using System.Linq;
using DTO;
using BL.Casting;
using DAL;
using Entities;

namespace BL
{
    public static class UserLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static UserDTO Login(UserDTO userDTO)
        {
            User user;
            if (userDTO.userName != null)
                user = db.Users.FirstOrDefault(i => i.userTz == userDTO.userTz && i.userName == userDTO.userName);
            else
                user = db.Users.FirstOrDefault(i => i.userTz == userDTO.userTz);

            if (user == null)
                return null;
            return UserCast.CastToDTO(user);
        }

        public static double? getBalanceByUser(UserDTO user)
        {
            db = new controlPrintEntities();
            if (user != null)
            {
                double? depositSum = db.Users.FirstOrDefault(u => u.userId == user.userId).Deposits.ToList().Sum(d => d.depositAmount);
                double? costPrintSum = db.Users.FirstOrDefault(u => u.userId == user.userId).PrintHistories.ToList().Sum(p => p.costPrint);
                return depositSum - costPrintSum;
            }
            return 0;
        }

        public static List<UserDTO> GetStudents()
        {
            List<UserDTO> userDTOs = new List<UserDTO>();
            db.Users.ToList().ForEach(u => userDTOs.Add(UserCast.CastToDTO(u)));
            return userDTOs.Where(w => w.entityTypeId == DTO.Type.student).ToList();
        }

        public static List<StudentWithSpecDTO> GetStudentsWithSpecs()
        {

            List<StudentWithSpecDTO> usersWithSpecs = new List<StudentWithSpecDTO>();
            db.Users.ToList().Where(u => UserCast.CastToDTO(u).entityTypeId == DTO.Type.student).ToList().ForEach(u2 =>
            {
                StudentWithSpecDTO studentWithSpec = new StudentWithSpecDTO()
                {
                    userId = u2.userId,
                    userTz = u2.userTz,
                    userName = u2.userName,
                    balance = getBalanceByUser(UserCast.CastToDTO(u2)),
                    specs = new List<SpecializationDTO>()
                };

                db.UserToSpecs.Where(us => us.userId == u2.userId).ToList().ForEach(us2 =>
                {
                    db.Specializations.Where(s => s.specId == us2.specId).ToList().ForEach(s2 => studentWithSpec.specs.Add(SpecializationCast.CastToDTO(s2)));
                });
                usersWithSpecs.Add(studentWithSpec);
            });
            return usersWithSpecs;

        }
        public static void ChangePassword(UserDTO userDTO)
        {
            User user = UserCast.CastToDAL(userDTO);
            db.Users.FirstOrDefault(u => u.userId == user.userId).userTz = userDTO.userTz;
            db.SaveChanges();
        }
        public static UserDTO GetTeacher()
        {
            return UserCast.CastToDTO(db.Users.FirstOrDefault(u => u.entityTypeId == (int)DTO.Type.teacher));
        }
    }
}