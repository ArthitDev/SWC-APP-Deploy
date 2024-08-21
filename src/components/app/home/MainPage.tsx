import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HealingIcon from '@mui/icons-material/Healing';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { InfoIcon } from 'lucide-react';
import router from 'next/router';
import React from 'react';
import COLORS from 'theme/colors';

import DidyouknowCard from './DidyouknowCard';
// นำเข้า DidyouknowCard
import FeatureBadge from './FeatureBadge';
import IconCircle from './IconCircle';
import InfoCard from './InfoCard';
import TrickCard from './TrickCard';

const fadeInTransition = {
  duration: 0.5,
};

const fadeInVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const MainPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeInVariants}
      transition={fadeInTransition}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            cursor: 'pointer',
          }}
          onClick={() => router.push('/app/about')}
        >
          <InfoIcon color={COLORS.blue[6]} />
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <IconCircle
            icon={<HealingIcon sx={{ fontSize: 60, color: COLORS.blue[6] }} />}
            backgroundColor="#BFDBFE"
          />
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', color: COLORS.blue[6] }}
            >
              Smart Wound Care
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '10px',
                backgroundColor: '#BFDBFE',
                borderRadius: '10px',
                margin: '8px auto',
              }}
            />
            <Typography sx={{ color: COLORS.gray[11] }}>
              การวิเคราะห์แผลด้วย Ai เพื่อการรักษาที่ถูกต้อง
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
          <FeatureBadge
            text="ขับเคลื่อนด้วย AI"
            backgroundColor="#BFDBFE"
            color={COLORS.blue[6]}
          />
          <FeatureBadge
            text="ใช้งานง่าย"
            backgroundColor="#D1FAE5"
            color={COLORS.green[6]}
          />
          <FeatureBadge
            text="ข้อมูลหลากหลาย"
            backgroundColor="#FEF3C7"
            color={COLORS.orange[6]}
          />
        </Box>

        <InfoCard
          title="วิเคราะห์ภาพแผลทันที"
          description="รับการวินิจฉัยแผลโดยการอัปโหลดรูปภาพแผล"
          buttonText="ถ่ายรูปภาพแผล"
          buttonIcon={<CameraAltIcon />}
          onButtonClick={() => router.push('/app/predict')}
        />

        <InfoCard
          title="แผลคืออะไร ?"
          description="แผล คือ การบาดเจ็บหรือความเสียหายที่เกิดขึ้นกับเนื้อเยื่อของร่างกายสามารถเกิดขึ้นมาได้
          จากหลายสาเหตุแผลสามารถแบ่งออกเป็นหลายประเภทตามสาเหตุและลักษณะของแผล"
          buttonText="อ่านบทความฉบับเต็ม"
          sxDescription={{
            textIndent: '2rem',
            textAlign: 'justify',
            whiteSpace: 'pre-line',
          }}
        />

        <TrickCard />
        <DidyouknowCard />
      </Box>
    </motion.div>
  );
};

export default MainPage;